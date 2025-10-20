"use client";
import { createContext, useContext, useState } from "react";

// 1️⃣ Context create karo
const RegFormContext = createContext();

// 2️⃣ Context Provider banao
export function RegFormProvider({ children }) {
    const [RegStep, setRegStep] = useState(0);
    const [RegPersonalForm, setRegPersonalForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "+92",
    });
    const [RegaboutData, setRegAboutData] = useState({ about: "" });
    const [RegAboutBlurBox, setRegAboutBlurBox] = useState({});
    const [RegComapnyData, setRegComapnyData] = useState({
        logo: null,
        mainImage: null,
        companyName: "",
        location: "",
        city: { value: "Faisalabad", label: "Faisalabad" },
        country: { value: "Pakistan", label: "Pakistan" },
        website: "",
    });
    const [RegCompanyBlurBox, setRegCompanyBlurBox] = useState({});
    const [RegServices, setRegServices] = useState([{ name: "", price: "", image: null }]);
    const [RegAuthPassword, setRegAuthPassword] = useState({
        password: "",
        confirmPassword: "",
    });

    const [RegshowPassword, setShowPassword] = useState(false);
    const [RegShowConfirm, setRegShowConfirm] = useState(false);
    const [RegAutherror, setRegAuthError] = useState("");
    const [RegFactoryImages, setRegFactoryImages] = useState([{ file: null }, { file: null }]); // Start with 2 boxes
    return (
        <RegFormContext.Provider
            value={{
                RegStep, setRegStep, RegPersonalForm, setRegPersonalForm,
                RegaboutData, setRegAboutData, RegAboutBlurBox, setRegAboutBlurBox,
                RegComapnyData, setRegComapnyData, RegCompanyBlurBox, setRegCompanyBlurBox,
                RegServices, setRegServices, RegshowPassword, setShowPassword,
                RegShowConfirm, setRegShowConfirm, RegAutherror, setRegAuthError,
                RegAuthPassword, setRegAuthPassword,RegFactoryImages,setRegFactoryImages
            }}
        >
            {children}
        </RegFormContext.Provider>
    );
}

// 3️⃣ Custom hook for easy use
export function useRegFormContext() {
    return useContext(RegFormContext);
}
