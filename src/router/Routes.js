import LayoutComponent from "../layout/Layout";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MovieHome from "../pages/home/MovieHome";
import Login from "../pages/login/Login";
import { MovieProvider } from "../context/MovieContext";
import MovieDetails from "../pages/home/MovieDetails";
import GameHome from "../pages/home/GameHome";
import GameDetails from "../pages/home/GameDetails";
import Register from "../pages/register/Register";
import { UserProvider } from "../context/UserContex";
import Home from "../pages/withAuth/Home";
import Cookies from "js-cookie";
import GameList from "../pages/withAuth/GameList";
import GameForm from "../pages/withAuth/GameForm";
import MovieList from "../pages/withAuth/MovieList";
import MovieForm from "../pages/withAuth/MovieForm";
import ChangePassword from "../pages/withAuth/ChangePassword";
const Routes = () => {
  const LoginRoute = ({ ...props }) => {
    if (Cookies.get("token") !== undefined) {
      return <Redirect to="/gameList" />;
    } else {
      return <Route {...props} />;
    }
  };
  return (
    <>
      <Router>
        <UserProvider>
          <Switch>
            <Route path="/" exact>
              <MovieProvider>
                <LayoutComponent content={<MovieHome />} />
              </MovieProvider>
            </Route>
            <Route path="/game" exact>
              <MovieProvider>
                <LayoutComponent content={<GameHome />} />
              </MovieProvider>
            </Route>
            <Route path="/gameDetail/:idGame" exact>
              <MovieProvider>
                <LayoutComponent content={<GameDetails />} />
              </MovieProvider>
            </Route>
            <Route path="/movie/:idMovie" exact>
              <MovieProvider>
                <LayoutComponent content={<MovieDetails />} />
              </MovieProvider>
            </Route>
            <LoginRoute path="/login" exact>
              <UserProvider>
                <LayoutComponent content={<Login />} />
              </UserProvider>
            </LoginRoute>
            <LoginRoute path="/register" exact>
              <LayoutComponent content={<Register />} />
            </LoginRoute>

            <Route path="/gameList" exact>
              <MovieProvider>
                <LayoutComponent content={<GameList />} />
              </MovieProvider>
            </Route>
            <Route path="/gameForm" exact>
              <MovieProvider>
                <LayoutComponent content={<GameForm />} />
              </MovieProvider>
            </Route>
            <Route path="/gameForm/:idGame" exact>
              <MovieProvider>
                <LayoutComponent content={<GameForm />} />
              </MovieProvider>
            </Route>
            <Route path="/movieList" exact>
              <MovieProvider>
                <LayoutComponent content={<MovieList />} />
              </MovieProvider>
            </Route>
            <Route path="/movieForm" exact>
              <MovieProvider>
                <LayoutComponent content={<MovieForm />} />
              </MovieProvider>
            </Route>
            <Route path="/movieForm/:idMovie" exact>
              <MovieProvider>
                <LayoutComponent content={<MovieForm />} />
              </MovieProvider>
            </Route>

            <Route path="/changePassword" exact>
              <UserProvider>
                <LayoutComponent content={<ChangePassword />} />
              </UserProvider>
            </Route>
          </Switch>
        </UserProvider>
      </Router>
    </>
  );
};

export default Routes;
