import { SceneItem } from "scenejs";
import { useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
    useEffect(() => {
        const Text = new SceneItem(

            {
                attribute: {
                    "data-text": [
                        "",
                        "J",
                        "Ja",
                        "Jad",
                        "Jade",
                        "Jaden",
                        "Jaden'",
                        "Jaden's",
                        "Jaden's P",
                        "Jaden's Po",
                        "Jaden's Por",
                        "Jaden's Port",
                        "Jaden's Portf",
                        "Jaden's Portfo",
                        "Jaden's Portfol",
                        "Jaden's Portfoli",
                        "Jaden's Portfolio",
                        "Jaden's Portfolio"
                    ],
                },
            },
            {
                duration: 5,
                selector: ".text",
                iterationCount: 1,
                fill: "forwards",
            }
        );

        Text.play();

        return () => {
            Text.stop();
            Text.destroy();
        };
    }, []);

    return (
        <div className="Header_container">

            <div className="text" data-text=""></div>
        </div>
    );
};

export default Header;
