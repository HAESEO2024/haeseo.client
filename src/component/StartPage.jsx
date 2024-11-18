import { useRef, useState } from "react";
import '../styles/StartPage.css';

function StartPage(){
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    return(
        <>
            <div className="img">
                <header className="header">
                    <div className="logo">
                        <img src="src/assets/logo.svg" />
                    </div>
                </header>
                <div className="start">
                    <img src="src/assets/logo.svg" />
                    <p>부산소프트웨어마이스터 일반교과 온라인 저지를 지금 시작해보세요!</p>
                    <button onClick={() => setModalOpen(true)}>시작하기</button>
                </div>

                    {
                    modalOpen &&
                    <div className={'modal-container'} ref={modalBackground} onClick={e => {
                        if (e.target === modalBackground.current) {
                        setModalOpen(false);
                        }
                    }}>
                        <div>
                            <button onClick={() => setModalOpen(false)}>
                                <img src="" alt="" />
                            </button>
                            <button onClick={() => console.log("선생님입니다")}>
                                <img src="" alt="" />
                                <div>
                                    <h2>선생님으로 해서 시작하기</h2>
                                    <h3>*로그인 필요*</h3>
                                </div>
                            </button>
                            <button onClick={() => console.log("학생입니다")}>
                                <img src="" alt="" />
                                <div>
                                    <h2>학생으로 해서 시작하기</h2>
                                </div>
                            </button>
                        </div>
                    </div>
                    }
                </div>
        </>
    );
}
export default StartPage;