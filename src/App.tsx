import CustomButton from "./components/button/button";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Buttons</h1>
      <div className="buttons">
        <div className="flex-btn">
          <div>
            <p>&#60;Button &#47;&#62;</p>
            <CustomButton theme="full">Default</CustomButton>
          </div>
          <div>
            <p className="hover">&#38;:hover, &#38;:focus</p>
            <CustomButton theme="full full-hover">Default</CustomButton>
          </div>
        </div>
        <div className="flex-btn">
          <div>
            <p>&#60;Button variant=”outline” &#47;&#62;</p>
            <CustomButton theme="outline">Default</CustomButton>
          </div>
          <div>
            <p className="hover">&#38;:hover, &#38;:focus</p>
            <CustomButton theme="outline out-hover">Default</CustomButton>
          </div>
        </div>
        <div className="flex-btn">
          <div>
            <p>&#60;Button variant=”text” &#47;&#62;</p>
            <CustomButton theme="text">Default</CustomButton>
          </div>
          <div>
            <p className="hover">&#38;:hover, &#38;:focus</p>
            <CustomButton theme="text text-hover">Default</CustomButton>
          </div>
        </div>
        <div>
          <p>&#60;Button disableShadow &#47;&#62;</p>
          <CustomButton theme="disable-shadow">Default</CustomButton>
        </div>
        <div className="flex-btn">
          <div>
            <p>&#60;Button disabled &#47;&#62;</p>
            <CustomButton theme="disable">Disable</CustomButton>
          </div>
          <div>
            <p>&#60;Button variant=”text” disabled &#47;&#62;</p>
            <CustomButton theme="text-2">Disable</CustomButton>
          </div>
        </div>
        <div className="flex-btn">
          <div>
            <p>&#60;Button startIcon=”local_grocery_store” &#47;&#62;</p>
            <CustomButton theme="start-icon btn-disable-shadow btn-lg">
              {" "}
              <i className="material-icons">shopping_cart</i>Default
            </CustomButton>
          </div>
          <div>
            <p>&#60;Button endIcon=”local_grocery_store” &#47;&#62;</p>
            <CustomButton theme="end-icon btn-disable-shadow btn-lg">
              Default <i className="material-icons">shopping_cart</i>
            </CustomButton>
          </div>
        </div>
        <div className="flex-btn">
          <div>
            <p>&#60;Button size=”small” &#47;&#62;</p>
            <CustomButton theme="sm btn-disable-shadow">Default</CustomButton>
          </div>
          <div>
            <p>&#60;Button size="medium" &#47;&#62;</p>
            <CustomButton theme="md btn-disable-shadow">Default</CustomButton>
          </div>
          <div>
            <p>&#60;Buttons size=”large” &#47;&#62;</p>
            <CustomButton theme="lg btn-disable-shadow">Default</CustomButton>
          </div>
        </div>
        <div className="flex-btn">
          <div>
            <p>&#60;Button color=”default” &#47;&#62;</p>
            <CustomButton theme="full">Default</CustomButton>
          </div>
          <div>
            <p>&#60;Button color=”primary” &#47;&#62;</p>
            <CustomButton theme="disable-shadow">Default</CustomButton>
          </div>
          <div>
            <p>&#60;Button color="secondary" &#47;&#62;</p>
            <CustomButton theme="secondary">Secondary</CustomButton>
          </div>
          <div>
            <p>&#60;Button color="danger" &#47;&#62;</p>
            <CustomButton theme="danger">Danger</CustomButton>
          </div>
        </div>
        <p className="hover">&#38;:hover, &#38;:focus</p>
        <div className="flex-btn">
          <div>
            <CustomButton theme="full full-hover">Default</CustomButton>
          </div>
          <div>
            <CustomButton theme="disable-shadow ds-hover">Default</CustomButton>
          </div>
          <div>
            <CustomButton theme="secondary sec-hover">Secondary</CustomButton>
          </div>
          <div>
            <CustomButton theme="danger danger-hover">Danger</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
