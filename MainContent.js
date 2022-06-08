import react from "react";

export default function MainContent() {
    return (
        <div className="Container">
            <div className="Main">
                <h2 className="Name">Laura Smith</h2>
                <p className="para">FrontEnd Developer</p>
                <p className="website">laurasmith.website</p>
                <button className="email"><span class="material-symbols-outlined">
                    mail
                </span>Email</button>

                <button className="linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
                <h3 className="about">About</h3>
                <p className="Intro">I am a FrontEnd Developer with a particular intrest in making things and automatic daily tasks.
                    I try to keep up with best practises,and always looking for new things to learn.
                </p>
                <h3 className="Intrests--head">Intrests</h3>
                <p className="Intrests">Food Expert.Love to travel other places.
                    Music scholar.Internet fantic.
                </p>
                <div className="Icons">
                    <div className="Icons-list">
                        <button><i class="fa-brands fa-twitter-square"></i></button>
                        <button><i class="fa-brands fa-facebook-square"></i></button>
                        <button><i class="fa-brands fa-instagram-square"></i></button>
                        <button><i class="fa-brands fa-github-square"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}