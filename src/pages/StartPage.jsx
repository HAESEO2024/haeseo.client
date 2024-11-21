import { useRef, useState } from "react";
import Header from "../components/Header";
import '../styles/StartPage.css';
import logo from "/src/assets/logo.svg";
import Teacher from "/src/assets/Teacher.svg";
import Student from "/src/assets/Student.svg";

function StartPage(){
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    const TeacherPage = () => {
        setModalOpen(false);
        //
    };

    const StudentPage = () => {
        setModalOpen(false);
        //학생 메인 페이지 이동
    };

    return(
        <>
        <Header />
        {
                modalOpen &&
                <div className={'modal-container'} ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                        setModalOpen(false);
                    }
                }}> 
                    <div className="Teacher">
                        <img src={Teacher} />
                        <button onClick={TeacherPage} className="TeacherB">
                            <h2>선생님으로 해서 시작하기</h2>
                            <h3>*로그인 필요*</h3>
                        </button>
                    </div>
                    <div className="Student">
                        <img src={Student} />
                        <button onClick={StudentPage} className="StudentB">
                            <h2>학생으로 해서 시작하기</h2>
                        </button>
                    </div>  
                </div>
                }
                <div className={`BG ${modalOpen ? 'blur' : ''}`}>
                    <div className="start">
                        <img src={logo} />
                        <p>부산소프트웨어마이스터 일반교과 온라인 저지를 지금 시작해보세요!</p>
                        <button onClick={() => setModalOpen(true)}>시작하기</button>
                    </div>
                </div>
        </>
    );
}
export default StartPage;