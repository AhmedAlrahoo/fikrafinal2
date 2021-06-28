import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const users = [
        {
            name: "عباس",
            number: "07702021",
        },
        {
            name: "ابو جاسم",
            number: "07702021",
        },
    ];

    const [user, setUser] = useState({ name: "", number: "" });
    const [error, setError] = useState(false);

    const HandleSubmit = (e) => {
        e.preventDefault();
        for (const element of users) {
            if (
                e.target.name.value === element.name &&
                e.target.number.value === element.number
            ) {
                setUser({ name: e.target.name.value, number: e.target.number.value });
            }
            else setError(true);
        }
    };

    return (
        <div className="login-form">
            {user.name !== "" ? <h1>Result</h1> :
                <div className="registration">
                    <div className="image">
                        <h1>Logo</h1>
                    </div>
                    <div className="inputSide">
                        <div className="wrapper">
                            <div className="illustration"></div>
                            <form onSubmit={HandleSubmit}>
                                <h3>ادخل المعلومات</h3>
                                <div className="inputs">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        dir="rtl"
                                        placeholder="الاسم"
                                    />
                                    <input
                                        type="number"
                                        name="number"
                                        id="number"
                                        dir="rtl"
                                        placeholder="الرقم"
                                    />
                                </div>
                                <div className="bottomForm">
                                    <Link to="/login/result">
                                    <button type="submit" value="checkInfo">
                                        نتيجة الفحص
                                    </button>                                    
                                    </Link>
                                    {error && <h4>هنالك خلل في البيانات المدخلة</h4>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}


export default Login
