import React, { useRef } from "react";
import "./GroceryApp.scss";
import GroceryAppBanner from "../../images/GroceryApp/GroceryAppBanner.png";
import GroceryUserFlow from "../../images/GroceryApp/GroceryUserFlow.png";
import GroceryWireframe from "../../images/GroceryApp/GroceryWireframe.png";
import GrocerySplash from "../../images/GroceryApp/GrocerySplash.gif";
import GroceryLogin1 from "../../images/GroceryApp/GroceryLogin1.png";
import GroceryLogin2 from "../../images/GroceryApp/GroceryLogin2.png";
import GroceryHome from "../../images/GroceryApp/GroceryHome.png";
import GroceryCounting from "../../images/GroceryApp/GroceryCounting.gif";
import GroceryProgress from "../../images/GroceryApp/GroceryProgress.gif";
import GroceryAdd1 from "../../images/GroceryApp/GroceryAdd1.png";
import GroceryAdd2 from "../../images/GroceryApp/GroceryAdd2.png";

const GroceryApp = () => {
  const ref = useRef();
  const handleScrollClick = () =>
    ref.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="grocery-app">
      <div className="container">
        <div className="project-title">Grocery List App</div>
        <div className="project-overview-description text-center">
          This is a mobile app that helps grocery shopping become easier and
          more efficient.
        </div>
        <img
          className="banner-image"
          src={GroceryAppBanner}
          alt="Grocery app banner"
        />
        <div className="project-overview">Overview</div>
        <div className="project-overview-description">
          Grocery List is an application that allows users to quickly create a
          grocery shopping list. Users can choose items for the list from a
          customized collection. This helps save time and effort, makes grocery
          shopping experience smoother.
        </div>
        <div className="scroll-button" onClick={handleScrollClick}>
          See final design
        </div>
        <div className="project-overview">User flow</div>
        <div className="project-overview-description">
          After brainstorming ideas, I created a user flow of how a user would
          go through the app. User flow gave me a clear picture of the steps
          that the user would need to take to get to their final goal.
        </div>
        <img src={GroceryUserFlow} alt="Grocery app user flow" />
        <div className="project-overview">Low fidelity wireframe</div>
        <div className="project-overview-description">
          Once I had a clear idea of the information architecture of the app, I
          went ahead and created lo-fi wireframes. There were 3 main functions I
          wanted to focus on to solve the problem: creating a new list,
          checking/unchecking the items on the list and showing the progress of
          completing the list.
        </div>
        <img src={GroceryWireframe} alt="Grocery app low fidelity wireframe" />
      </div>
      <div ref={ref} className="section-with-bg">
        <div className="content-inner-bg">
          <div className="project-overview">High fidelity design</div>
          <div className="flex-container mock-wrapper-text-right">
            <div className="md-50">
              <img src={GrocerySplash} alt="Grocery app splash screen" />
            </div>

            <div className="md-50">
              <div>
                <div className="project-sub-title">Onboarding</div>
                <div className="project-sub-description">
                  Splash screen shows the logo and name of the application with
                  a small animation to smoothen the onboarding process.
                </div>
              </div>
            </div>
          </div>
          <div className="project-sub-title text-center mt-100">
            Login / Sign up
          </div>
          <div className="project-sub-description text-wrap-80">
            The login view will have two simple inputs for email and password.
            If users have not register yet, there will be a link to register
            page.
            <br />
            In register page there will be one more field, which is name of
            user.
          </div>
          <div className="flex-container justify-even mt-50">
            <div className="md-40">
              <img
                className="phone-img"
                src={GroceryLogin1}
                alt="Grocery app login"
              />
            </div>
            <div className="md-40">
              <img
                className="phone-img"
                src={GroceryLogin2}
                alt="Grocery app register"
              />
            </div>
          </div>
          <div className="flex-container mt-100 mock-wrapper-text-left">
            <div className="md-50">
              <div>
                <div className="project-sub-title">Home screen</div>
                <div className="project-sub-description">
                  After logging in, users will be brought to home screen.
                  <br />
                  In the home screen there will be a menu button on the top
                  left, which users can use to sign out or update info.
                  <br />
                  In the main center area there will be three buttons: one to
                  create a new list, one to check on current list, and the last
                  one to add items to collection, so that it could be used when
                  creating new list.
                </div>
              </div>
            </div>
            <div className="md-50">
              <img
                className="phone-img"
                src={GroceryHome}
                alt="Grocery app splash screen"
              />
            </div>
          </div>
          <div className="flex-container mt-100 mock-wrapper-text-right">
            <div className="md-50">
              <img src={GroceryCounting} alt="Grocery app counting screen" />
            </div>

            <div className="md-50">
              <div>
                <div className="project-sub-title">Counting the items</div>
                <div className="project-sub-description">
                  In this view, there will be a premade collection of items
                  (which can be edited in collection view). Users can tick the
                  items that they want to buy and it will be added to the list.
                  Number of items will also be counted and displayed.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-container mt-100 mock-wrapper-text-left">
            <div className="md-50">
              <div>
                <div className="project-sub-title">Progress view</div>
                <div className="project-sub-description">
                  When users have created a list, they can check their current
                  list progress, and tick on the items that they have
                  picked/purchased to update the progress.
                </div>
              </div>
            </div>
            <div className="md-50">
              <img src={GroceryProgress} alt="Grocery app counting screen" />
            </div>
          </div>
          <div className="project-sub-title text-center mt-100">
            Add new items to collection
          </div>
          <div className="project-sub-description text-wrap-80">
            Users can edit/add new items to the collection. This collection will
            be available when user try to create a new list, so that they can
            quickly choose items from it.
          </div>
          <div className="flex-container justify-even mt-50">
            <div className="md-40">
              <img
                className="phone-img"
                src={GroceryAdd1}
                alt="Grocery app login"
              />
            </div>
            <div className="md-40">
              <img
                className="phone-img"
                src={GroceryAdd2}
                alt="Grocery app register"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryApp;
