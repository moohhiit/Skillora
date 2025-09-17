import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { addDoc, collection, doc, getDoc, getDocs, limit, orderBy, query, Timestamp, where } from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { db } from "../service/Firebase";


interface Course {
    id: string;
    name: string;
    description: string;
}

interface DataContextType {
    courses: Course[];
    loading: boolean;
    profile: UserProfile | null;
    writeQueryOnDate: (question_data: Query) => void;
    fetchTodayQueries: () => Promise<Object[]>;
}

interface UserProfile {
    id: string;
    name: string;
    email: string;
    role?: string;
}

type Query = {
    id: number;
    question: string;
    answer: string;
    ans_user: string
    createdAt: Timestamp;
    userId?: string;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [profile, setProfile] = useState<UserProfile | null>(null);

    const getTodayRange = () => {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

        return {
            start: Timestamp.fromDate(startOfDay),
            end: Timestamp.fromDate(endOfDay)
        };
    };

    const writeQueryOnDate = async (question_data: Query) => {
        await addDoc(collection(db, 'query'), {
            ...question_data
        });
        console.log('New document created for the date:');
    };

    const fetchTodayQueries = async () => {
        const { start, end } = getTodayRange();

        const q = query(
            collection(db, "query"),
            where("createdAt", ">=", start),
            where("createdAt", "<=", end),
            limit(20)
        );

        const snapshot = await getDocs(q);
        const results = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log("Today's queries:", results);
        return results;
    };

    useEffect(() => {
        if (!user) {
            setProfile(null);
            return;
        }

        const fetchUserProfile = async () => {
            setLoading(true);
            try {

                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProfile({ id: docSnap.id, ...docSnap.data() } as UserProfile);
                } else {
                    console.warn("No user profile found in Firestore");
                    setProfile(null);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [user]);

    useEffect(() => {
        if (!user) {

            setCourses([]);
            return;
        }

        const fetchCourses = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "Courses"));
                const courseList: Course[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Course[];
                setCourses(courseList);
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [user]);

    return (
        <DataContext.Provider value={{
            courses,
            loading,
            profile,
            writeQueryOnDate,
            fetchTodayQueries
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error("useDataContext must be used within DataProvider");
    return context;
};
