import Arrow from './arrow.svg?react';
import ArrowsExpand from './arrows-expand.svg?react';
import BonusIncome from './bonus-income.svg?react';
import Chat from './chat.svg?react';
import CherryColor from './cherry-color.svg?react';
import CreditCard from './credit-card.svg?react';
import Donation from './donation.svg?react';
import Education from './education.svg?react';
import EmergencyFund from './emergency-fund.svg?react';
import FoodGroceries from './food-groceries.svg?react';
import Inbox from './inbox.svg?react';
import InformationCircle from './information-circle.svg?react';
import LifetimeIncome from './lifetime-income.svg?react';
import LifetimeOutcome from './lifetime-outcome.svg?react';
import Logoo from './logoo.svg?react';
import MenuSidebar from './menu-sidebar.svg?react';
import MenuThreePoint from './menu-three-point.svg?react';
import OrangeColor from './orange-color.svg?react';
import QuestionMarkCircle from './question-mark-circle.svg?react';
import Repair from './repair.svg?react';
import ReqPayment from './req-payment.svg?react';
import Search from './search.svg?react';
import SendPayment from './send-payment.svg?react';
import Setting from './setting.svg?react';
import TravelPlan from './travel-plan.svg?react';
import TurqoiColor from './turqoi-color.svg?react';
import WisteriaColor from './wisteria-color.svg?react';


const icons =  {
    Arrow,
    ArrowsExpand,
    BonusIncome,
    Chat,
    CherryColor,
    CreditCard,
    Donation,
    Education,
    EmergencyFund,
    FoodGroceries,
    Inbox,
    InformationCircle,
    LifetimeIncome,
    LifetimeOutcome,
    Logoo,
    MenuSidebar,
    MenuThreePoint,
    OrangeColor,
    QuestionMarkCircle,
    Repair,
    ReqPayment,
    Search,
    SendPayment,
    Setting,
    TravelPlan,
    TurqoiColor,
    WisteriaColor
} satisfies Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>;

type IconApp = {
    name: keyof typeof icons,
    hight?: number,
    width?: number,
}

export const IconApp = ({ name, hight = 24, width = 24 }: IconApp) => {
    const IconComponent = icons[name];
    return <IconComponent height={hight} width={width} />;
};