import SummaryIcon from "@material-ui/icons/Dashboard";
import BankAccountIcon from "@material-ui/icons/AccountBalance";
import CashAccountIcon from "@material-ui/icons/AccountBalanceWallet";
import BudgetIcon from "@material-ui/icons/Work";
import ReportsIcon from "@material-ui/icons/BarChart";
import SettingsIcon from "@material-ui/icons/Settings";

export const NavigationList = [
  { title: "Summary", icon: SummaryIcon, url: "/" },
  { title: "Bank Accounts", icon: BankAccountIcon, url: "/bank_accounts" },
  { title: "Cash Accounts", icon: CashAccountIcon, url: "/cash_accounts" },
  { title: "Budget", icon: BudgetIcon, url: "/budget" },
  { title: "Reports", icon: ReportsIcon, url: "/reports" },
  { title: "Settings", icon: SettingsIcon, url: "/settings" }
];
