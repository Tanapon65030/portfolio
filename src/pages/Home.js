import { ArrowDownOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import { Button } from "../components";
import { useFlexibleHeight } from "../utils/script";

function Home() {
    return (
        <>
            <div id="section-home" style={{ height: `${useFlexibleHeight()}px` }}>
                <div className="bg-home">
                    <div className="container">
                        <Fade bottom distance="10%">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center pt-20pc text-center"
                                style={{
                                    height: `${useFlexibleHeight() - 180}px`,
                                }}
                            >
                                <p className="mb-1 font-bold text-uppercase">
                                    Hello, I am
                                </p>
                                <h1 className="mb-1 heading-name">
                                    Tanapon Sakulphetaram
                                </h1>
                                <p className="mb-18 font-bold text-uppercase">
                                    This is my portfolio website
                                </p>
                                <Button
                                    className="btn btn-transparent btn-icon bounce"
                                    onClick={() => {
                                        document
                                            .getElementById("section-about-me")
                                            .scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}
                                >
                                    <ArrowDownOutlined />
                                </Button>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="bg-wave"></div>
            </div>
        </>
    );
}

export default Home;
