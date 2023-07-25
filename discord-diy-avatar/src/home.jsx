export const Home = () => {

    return (
        <>
            <p>
                Diy your own custom Discord avatar here!
            </p>

            <h1>DIY Avatar Maker</h1>
            <div id="avatarDisplay">
            </div>
            <div id="avatarControls_color">
                <label htmlFor="background_color">Background:</label>
                <input type="color" id="background_color"/>

                <label htmlFor="body_color">Body:</label>
                <input type="color" id="body_color"/>

                <label htmlFor="back_ground_color">Background Color:</label>
                <input type="color" id="back_ground_color"/>
            </div>


        </>
    )
}