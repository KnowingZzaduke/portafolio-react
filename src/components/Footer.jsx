import { useState, useEffect } from "react";
export function Footer(){
    const [year, setYear] = useState();

    useEffect(() => {
        const getYear = new Date().getFullYear();
        setYear(getYear);
    }, [])
    return (
        <div className="content_footer">
            <footer>
                <p>&#169; 2023 José Luis Arteta Buelvas⚡</p>
            </footer>
        </div>
    )
}