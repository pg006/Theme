import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Error400 from "../components/Authentication/errorPage/Error400/Error400";
import Error401 from "../components/Authentication/errorPage/Error401/Error401";
import Error403 from "../components/Authentication/errorPage/Error403/Error403";
import Error404 from "../components/Authentication/errorPage/Error404/Error404";
import Error500 from "../components/Authentication/errorPage/Error500/Error500";
import Error503 from "../components/Authentication/errorPage/Error503/Error503";
import ForgotPassword from "../components/Authentication/Forgot Password/ForgotPassword";
import LockScreen from "../components/Authentication/LockScreen/LockScreen";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import AuthenticationPage from "../components/AuthenticationPage";
import Area from "../components/Charts/ApexChart/Area/Area";
import Bar from "../components/Charts/ApexChart/Bar/Bar";
import Boxplot from "../components/Charts/ApexChart/Boxplot/Boxplot";
import CandleStick from "../components/Charts/ApexChart/CandleStick/CandleStick";
import Column from "../components/Charts/ApexChart/Column/Column";
import Line from "../components/Charts/ApexChart/Line/Line";
import Mixed from "../components/Charts/ApexChart/Mixed/Mixed";
import Pie from "../components/Charts/ApexChart/Pie/Pie";
import Polararea from "../components/Charts/ApexChart/Polararea/Polararea";
import Radar from "../components/Charts/ApexChart/Radar/Radar";
import Radialbar from "../components/Charts/ApexChart/Radialbar/Radialbar";
import Timeline from "../components/Charts/ApexChart/Timeline/Timeline";
import Treemap from "../components/Charts/ApexChart/Treemap/Treemap";
import Chartjs from "../components/Charts/Chart Js/Chartjs";
import { Bars } from "../components/Charts/Echarts/Bars/Bars";
import CandleSticks from "../components/Charts/Echarts/CandleSticks/CandleSticks";
import Lines from "../components/Charts/Echarts/Lines/Lines";
import Scatter from "../components/Charts/Echarts/Scatter/Scatter";
import Trees from "../components/Charts/Echarts/Trees/Trees";
import Dashboard from "../components/Dashboard/Dashboard";
import ErrorPages from "../components/ErrorPages";
import BootstrapIcons from "../components/Icons/BootstrapIcons/BootstrapIcons";
import FeatherIcons from "../components/Icons/FeatherIcons/FeatherIcons";
import FlagIcons from "../components/Icons/FlagIcons/FlagIcons";
import FontAwesome from "../components/Icons/FontAwesome/FontAwesome";
import IonicIcons from "../components/Icons/IonicIcons/IonicIcons";
import MaterialDesignIcons from "../components/Icons/MaterialDesignIcons/MaterialDesignIcons";
import PaymentsIcon from "../components/Icons/PaymentsIcon/PaymentsIcon";
import Pe7Icons from "../components/Icons/Pe7Icons/Pe7Icons";
import SimpleLineIcons from "../components/Icons/SimpleLineIcons/SimpleLineIcons";
import ThemifyIcons from "../components/Icons/ThemifyIcons/ThemifyIcons";
import TypiconsIcons from "../components/Icons/TypiconsIcons/TypiconsIcons";
import WeatherIcons from "../components/Icons/WeatherIcons/WeatherIcons";
import LeafletMaps from "../components/Maps/LeafletMaps/LeafletMaps";
import SimpleMaps from "../components/Maps/SimpleMaps/SimpleMaps";
import ThemeAuth from "../components/Authentication/ThemeAuth/ThemeAuth";
import ThemeAuthSignUp from "../components/Authentication/ThemeAuth/ThemeAuthSignUp";
import AuthLogin from "../components/Authentication/ThemeAuth/AuthLogin"
import EditprofilePage from "../components/Pages/EditprofilePage/EditprofilePage";
import GalleryPage from "../components/Pages/GalleryPage/GalleryPage";
import MailComposePage from "../components/Pages/MailComposePage/MailComposePage";
import MailInboxPage from "../components/Pages/MailInboxPage/MailInboxPage";
import MailReadPage from "../components/Pages/MailReadPage/MailReadPage";
import NotificationListPage from "../components/Pages/NotificationListPage/NotificationListPage";
import ProfilePage from "../components/Pages/ProfilePage/ProfilePage";
import FormAdvancedPage from "../components/Pages/Forms/FormAdvancedPage/FormAdvancedPage";
import FormEditorPage from "../components/Pages/Forms/FormEditorPage/FormEditorPage";
import FormElementsPage from "../components/Pages/Forms/FormElementsPage/FormElementsPage";
import FormLayoutsPage from "../components/Pages/Forms/FormLayoutsPage/FormLayoutsPage";
import FormValidationPage from "../components/Pages/Forms/FormValidationPage/FormValidationPage";
import FormWizardPage from "../components/Pages/Forms/FormWizardPage/FormWizardPage";
import FormInputSpinnersPage from "../components/Pages/Forms/FormInputSpinnersPage/FormInputSpinnersPage";
import DataTablePage from "../components/Pages/Tables/DataTablePage/DataTablePage";
import DefaultTablePage from "../components/Pages/Tables/DefaultTablePage/DefaultTablePage";
import EditTablePage from "../components/Pages/Tables/EditTablePage/EditTablePage";
import AboutCompanyPage from "../components/Pages/ExtensionPage/AboutCompanyPage/AboutCompanyPage";
import BlogDetailsPage from "../components/Pages/ExtensionPage/BlogDetailsPage/BlogDetailsPage";
import BlogPostPage from "../components/Pages/ExtensionPage/BlogPostPage/BlogPostPage";
import BlogsPage from "../components/Pages/ExtensionPage/BlogsPage/BlogsPage";
import EmptyPage from "../components/Pages/ExtensionPage/EmptyPage/EmptyPage";
import FAQSPage from "../components/Pages/ExtensionPage/FAQSPage/FAQSPage";
import InvoicePage from "../components/Pages/ExtensionPage/InvoicePage/InvoicePage";
import PricingPage from "../components/Pages/ExtensionPage/PricingPage/PricingPage";
import ServicesPage from "../components/Pages/ExtensionPage/ServicesPage/ServicesPage";
import SettingsPage from "../components/Pages/ExtensionPage/SettingsPage/SettingsPage";
import TermsPage from "../components/Pages/ExtensionPage/TermsPage/TermsPage";
import UnderConstructionPage from "../components/Pages/ExtensionPage/UnderConstructionPage/UnderConstructionPage";
import CustomPage from "../components/CustomPage";
import AddProduct from "../components/E-commerce/AddProduct/AddProduct";
import Checkout from "../components/E-commerce/Checkout/Checkout";
import ProductDetails from "../components/E-commerce/ProductDetails/ProductDetails";
import Shop from "../components/E-commerce/Shop/Shop";
import ShoppingCart from "../components/E-commerce/ShoppingCart/ShoppingCart";
import Wishlist from "../components/E-commerce/Wishlist/Wishlist";
import FileAttachments from "../components/FileManager/FileAttachments/FileAttachments";
import FileDetails from "../components/FileManager/FileDetails/FileDetails";
import FileManagerList from "../components/FileManager/FileManagerList/FileManagerList";
import FileManager from "../components/FileManager/FileManager/FileManager";
import CardsDesign from "../components/App/CardsDesign/CardsDesign";
import Chat from "../components/App/Chat/Chat";
import Charts from "../components/App/Charts/Charts";
import ContentScrollbar from "../components/App/ContentScrollbar/ContentScrollbar";
import Counters from "../components/App/Counters/Counters";
import Cryptocurrencies from "../components/App/Cryptocurrencies/Cryptocurrencies";
import DefaultCalender from "../components/App/DefaultCalender/DefaultCalender";
import Footers from "../components/App/Footers/Footers";
import FullCalender from "../components/App/FullCalender/FullCalender";
import Loaders from "../components/App/Loaders/Loaders";
import Notifications from "../components/App/Notifications/Notifications";
import RangeSlider from "../components/App/RangeSlider/RangeSlider";
import Rating from "../components/App/Rating/Rating";
import Search from "../components/App/Search/Search";
import Sweet from "../components/App/Sweet/Sweet";
import TreeView from "../components/App/TreeView/TreeView";
import Userlist from "../components/App/Userlist/Userlist";
import Widgets from "../components/App/Widgets/Widgets";
import TimeLine from "../components/App/TimeLine/TimeLine";
import Accordians from "../components/Bootstrap/Accordians/Accordians";
import BootstrapAlerts from "../components/Bootstrap/BootstrapAlerts/BootstrapAlerts";
import AvatarRadius from "../components/Bootstrap/AvatarRadius/AvatarRadius";
import AvatarSquare from "../components/Bootstrap/AvatarSquare/AvatarSquare";
import AvatarRounded from "../components/Bootstrap/AvatarRounded/AvatarRounded";
import BadgesPills from "../components/Bootstrap/BadgesPills/BadgesPills";
import Breadcrumbs from "../components/Bootstrap/Breadcrumbs/Breadcrumbs";
import Buttons from "../components/Bootstrap/Buttons/Buttons";
import Carousels from "../components/Bootstrap/Carousels/Carousels";
import Colors from "../components/Bootstrap/Colors/Colors";
import DropDowns from "../components/Bootstrap/DropDowns/DropDowns";
import MediaObject from "../components/Bootstrap/MediaObject/MediaObject";
import Navigation from "../components/Bootstrap/Navigation/Navigation";
import OffCanvas from "../components/Bootstrap/OffCanvas/OffCanvas";
import Paginations from "../components/Bootstrap/Pagination/Pagination";
import Panels from "../components/Bootstrap/Panels/Panels";
import Progress from "../components/Bootstrap/Progress/Progress";
import BoostrapTabs from "../components/Bootstrap/Tabs/Tabs";
import Tags from "../components/Bootstrap/Tags/Tags";
import Thumbnails from "../components/Bootstrap/Thumbnails/Thumbnails";
import Toast from "../components/Bootstrap/Toast/Toast";
import TooltipPopover from "../components/Bootstrap/TooltipPopover/TooltipPopover";
import Typography from "../components/Bootstrap/Typography/Typography";
import Ribbons from "../components/Bootstrap/Ribbons/Ribbons";
import Modals from "../components/Bootstrap/Modal/Modal";
import ListGroups from "../components/Bootstrap/ListGroup/ListGroup";
import Landing from "../components/Landing";
import Switcherapp from "../components/Switcherapp";

const AllRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path={`/`} element={<ThemeAuth />}>
                        <Route index element={<AuthLogin />} />
                        <Route path={`/Authentication/firebaseAuth/login`} element={<AuthLogin />} />
                        <Route path={`/Authentication/firebaseAuth/SignUp`} element={<ThemeAuthSignUp />} />
                    </Route>

                    <Route path={``} element={<App />}>
                        <Route>
                            <Route path={`/dashboard`} element={<Dashboard />} />
                        </Route>

                        {/* Maps */}
                        <Route>
                            <Route path={`/maps/leafletmaps`} element={<LeafletMaps />} />
                            <Route path={`/maps/simplemaps`} element={<SimpleMaps />} />
                        </Route>

                        {/* Apps */}
                        <Route>
                            <Route path={`/apps/carddesigns`} element={<CardsDesign />} />,
                            <Route path={`/apps/chat`} element={<Chat />} />,
                            <Route path={`/apps/charts`} element={<Charts />} />,
                            <Route path={`/apps/scrollbar`} element={<ContentScrollbar />} />,
                            <Route path={`/apps/counter`} element={<Counters />} />,
                            <Route path={`/apps/cryptocurrencies`} element={<Cryptocurrencies />} />,
                            <Route path={`/apps/defaultcalender`} element={<DefaultCalender />} />,
                            <Route path={`/apps/footer`} element={<Footers />} />,
                            <Route path={`/apps/fullcalender`} element={<FullCalender />} />,
                       
                            <Route path={`/apps/loader`} element={<Loaders />} />,
                            <Route path={`/apps/notification`} element={<Notifications />} />,
                            <Route path={`/apps/rangeslider`} element={<RangeSlider />} />,
                            <Route path={`/apps/rating`} element={<Rating />} />,
                            <Route path={`/apps/search`} element={<Search />} />,
                            <Route path={`/apps/sweet`} element={<Sweet />} />,
                            <Route path={`/apps/timeline`} element={<TimeLine />} />,
                            <Route path={`/apps/treeview`} element={<TreeView />} />,
                            <Route path={`/apps/userlist`} element={<Userlist />} />,
                            <Route path={`/apps/widgets`} element={<Widgets />} />,
                        </Route>

                        {/* bootstrap */}
                        <Route>
                            <Route path={`/bootstrap/accordian`} element={<Accordians />} />,
                            <Route path={`/bootstrap/bootstrapalerts`} element={<BootstrapAlerts />} />,
                            <Route path={`/bootstrap/avatarradius`} element={<AvatarRadius />} />,
                            <Route path={`/bootstrap/avatarsquare`} element={<AvatarSquare />} />,
                            <Route path={`/bootstrap/avatarrounded`} element={<AvatarRounded />} />,
                            <Route path={`/bootstrap/badgespills`} element={<BadgesPills />} />,
                            <Route path={`/bootstrap/breadcrumbs`} element={<Breadcrumbs />} />,
                            <Route path={`/bootstrap/buttons`} element={<Buttons />} />,
                            <Route path={`/bootstrap/carousels`} element={<Carousels />} />,
                            <Route path={`/bootstrap/colors`} element={<Colors />} />,
                            <Route path={`/bootstrap/dropdowns`} element={<DropDowns />} />,
                            <Route path={`/bootstrap/listgroups`} element={<ListGroups />} />,
                            <Route path={`/bootstrap/mediaobject`} element={<MediaObject />} />,
                            <Route path={`/bootstrap/modal`} element={<Modals />} />,
                            <Route path={`/bootstrap/navigation`} element={<Navigation />} />,
                            <Route path={`/bootstrap/offcanvas`} element={<OffCanvas />} />,
                            <Route path={`/bootstrap/pagination`} element={<Paginations />} />,
                            <Route path={`/bootstrap/panels`} element={<Panels />} />,
                            <Route path={`/bootstrap/progress`} element={<Progress />} />,
                            <Route path={`/bootstrap/tabs`} element={<BoostrapTabs />} />,
                            <Route path={`/bootstrap/tags`} element={<Tags />} />,
                            <Route path={`/bootstrap/thumbnails`} element={<Thumbnails />} />,
                            <Route path={`/bootstrap/toast`} element={<Toast />} />,
                            <Route path={`/bootstrap/tooltippopover`} element={<TooltipPopover />} />,
                            <Route path={`/bootstrap/typography`} element={<Typography />} />,
                            <Route path={`/bootstrap/ribbons`} element={<Ribbons />} />,
                        </Route>

                        {/* Charts */}
                        <Route>
                            <Route path={`/charts/chartjs`} element={<Chartjs />} />,
                            <Route path={`/charts/echart/lines`} element={<Lines />} />,
                            <Route path={`/charts/echart/bar`} element={<Bars />} />,
                            <Route path={`/charts/echart/candlestick`} element={<CandleSticks />} />
                            <Route path={`/charts/echart/scatter`} element={<Scatter />} />,
                            <Route path={`/charts/echart/tree`} element={<Trees />} />,
                            <Route path={`/charts/apexchart/line`} element={<Line />} />,
                            <Route path={`/charts/apexchart/area`} element={<Area />} />,
                            <Route path={`/charts/apexchart/column`} element={<Column />} />,
                            <Route path={`/charts/apexchart/bar`} element={<Bar />} />,
                            <Route path={`/charts/apexchart/mixed`} element={<Mixed />} />,
                            <Route path={`/charts/apexchart/timeline`} element={<Timeline />} />
                            <Route path={`/charts/apexchart/candlestick`} element={<CandleStick />} />
                            <Route path={`/charts/apexchart/boxplot`} element={<Boxplot />} />
                            <Route path={`/charts/apexchart/treemap`} element={<Treemap />} />
                            <Route path={`/charts/apexchart/pie`} element={<Pie />} />,
                            <Route path={`/charts/apexchart/radialbar`} element={<Radialbar />} />
                            <Route path={`/charts/apexchart/radar`} element={<Radar />} />,
                            <Route path={`/charts/apexchart/polararea`} element={<Polararea />} />
                        </Route>

                        {/* Icons */}
                        <Route>
                            <Route path={`/icons/bootstrapicons`} element={<BootstrapIcons />} />
                            <Route path={`/icons/feathericons`} element={<FeatherIcons />} />,
                            <Route path={`/icons/flagicons`} element={<FlagIcons />} />,
                            <Route path={`/icons/fontawesome`} element={<FontAwesome />} />,
                            <Route path={`/icons/ionicicons`} element={<IonicIcons />} />,  
                            <Route path={`/icons/materialdesignicons`} element={<MaterialDesignIcons />} />
                            <Route path={`/icons/pe7icons`} element={<Pe7Icons />} />,
                            <Route path={`/icons/simplelineicons`} element={<SimpleLineIcons />} />
                            <Route path={`/icons/themifyicons`} element={<ThemifyIcons />} />,
                            <Route path={`/icons/typiconsicons`} element={<TypiconsIcons />} />
                            <Route path={`/icons/weathericons`} element={<WeatherIcons />} />,
                            <Route path={`/icons/paymenticons`} element={<PaymentsIcon />} />
                        </Route>

                        {/* E-commerce */}
                        <Route>
                            <Route path={`/ecommerce/addproduct`} element={<AddProduct />} />,
                            <Route path={`/ecommerce/checkout`} element={<Checkout />} />,
                            <Route path={`/ecommerce/productdetails`} element={<ProductDetails />} />,
                            <Route path={`/ecommerce/shop`} element={<Shop />} />,
                            <Route path={`/ecommerce/shoppingcart`} element={<ShoppingCart />} />,
                            <Route path={`/ecommerce/wishlist`} element={<Wishlist />} />,
                        </Route>

                        {/* File-Manager */}
                        <Route>
                            <Route path={`/filemanager/fileattachments`} element={<FileAttachments />} />,
                            <Route path={`/filemanager/filedetails`} element={<FileDetails />} />,
                            <Route path={`/filemanager/filemanager`} element={<FileManager />} />,
                            <Route path={`/filemanager/filemanagerlist`} element={<FileManagerList />} />,
                        </Route>

                         {/* Pages */}
                         <Route>
                            <Route path={`/pages/editprofile`} element={<EditprofilePage />} />,
                            <Route path={`/pages/gallery`} element={<GalleryPage />} />,
                            <Route path={`/pages/mailcompose`} element={<MailComposePage />} />,
                            <Route path={`/pages/mailinbox`} element={<MailInboxPage />} />,
                            <Route path={`/pages/mailread`} element={<MailReadPage />} />,
                            <Route path={`/pages/notificationlist`} element={<NotificationListPage />} />,
                            <Route path={`/pages/profile`} element={<ProfilePage />} />,
                            <Route path={`/pages/forms/formadvanced`} element={<FormAdvancedPage />} />,
                            <Route path={`/pages/forms/formeditor`} element={<FormEditorPage />} />,
                            <Route path={`/pages/forms/formelements`} element={<FormElementsPage />} />,
                            <Route path={`/pages/forms/formlayouts`} element={<FormLayoutsPage />} />,
                            <Route path={`/pages/forms/formvalidation`} element={<FormValidationPage />} />,
                            <Route path={`/pages/forms/formwizard`} element={<FormWizardPage />} />,
                            <Route path={`/pages/forms/forminputspinner`} element={<FormInputSpinnersPage />} />,
                            <Route path={`/pages/tables/datatables`} element={<DataTablePage />} />,
                            <Route path={`/pages/tables/defaulttables`} element={<DefaultTablePage />} />,
                            <Route path={`/pages/tables/edittables`} element={<EditTablePage />} />,
                            <Route path={`/pages/extension/aboutcompany`} element={<AboutCompanyPage />} />,
                            <Route path={`/pages/extension/blogdetails`} element={<BlogDetailsPage />} />,
                            <Route path={`/pages/extension/blogpost`} element={<BlogPostPage />} />,
                            <Route path={`/pages/extension/blogs`} element={<BlogsPage />} />,
                            <Route path={`/pages/extension/emptypage`} element={<EmptyPage />} />,
                            <Route path={`/pages/extension/faqs`} element={<FAQSPage />} />,
                            <Route path={`/pages/extension/invoice`} element={<InvoicePage />} />,
                            <Route path={`/pages/extension/pricing`} element={<PricingPage />} />,
                            <Route path={`/pages/extension/services`} element={<ServicesPage />} />,
                            <Route path={`/pages/extension/setting`} element={<SettingsPage />} />,
                            <Route path={`/pages/extension/term`} element={<TermsPage />} />,
                        </Route>
                    </Route>

                    <Route path={`/`} element={<AuthenticationPage />}>
                        <Route path={`/authentication/login`} element={<Login />} />
                        <Route path={`/authentication/register`} element={<Register />} />
                        <Route path={`/authentication/forgotpassword`} element={<ForgotPassword />} />
                        <Route path={`/authentication/lockscreen`} element={<LockScreen />} />
                    </Route>

                    {/* Authentication Error Pages */}
                    <Route path={``} element={<ErrorPages />}>
                        <Route path={`/authentication/errorpage/error400`} element={<Error400 />} />
                        <Route path={`/authentication/errorpage/error401`} element={<Error401 />} />
                        <Route path={`/authentication/errorpage/error403`} element={<Error403 />} />
                        <Route path={`/authentication/errorpage/error404`} element={<Error404 />} />
                        <Route path={`/authentication/errorpage/error500`} element={<Error500 />} />
                        <Route path={`/authentication/errorpage/error503`} element={<Error503 />} />
                    </Route>

                    <Route path={`/`} element={<CustomPage />}>
                        <Route path={`/pages/extension/underconstruction`} element={<UnderConstructionPage />} />
                    </Route>

                    <Route>
                        <Route path={`/pages/switcher/switcherstyle1`} element={<Switcherapp />} />,
                    </Route>
                    <Route >
                        <Route path={`/landingPage/landingPage`} element={<Landing />} />
                    </Route>
                    <Route path="*" element={<Error500 />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default AllRoutes;
