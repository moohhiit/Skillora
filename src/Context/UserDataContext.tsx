import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
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
}

interface UserProfile {
    id: string;
    name: string;
    email: string;
    role?: string;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [profile, setProfile] = useState<UserProfile | null>(null);

    const sendQuery = ()=>{
        
    }
    const getquerybydate = (date:Number) =>{


    }


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
        <DataContext.Provider value={{ courses, loading , profile}}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error("useDataContext must be used within DataProvider");
    return context;
};
