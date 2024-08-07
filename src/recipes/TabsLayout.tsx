import { Link, Outlet, useMatch } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

function TabsLayout() {
  const match = useMatch("/recipe1/account") || "account";
  return (
    <div className="m-4">
      <Tabs defaultValue={match ? "account" : "password"} className="w-[400px]">
        <TabsList>
          <Link to="account">
            <TabsTrigger value="account">Account</TabsTrigger>
          </Link>
          <Link to="password">
            <TabsTrigger value="password">Password</TabsTrigger>
          </Link>
        </TabsList>
        <Outlet />
      </Tabs>
    </div>
  );
}

function AccountTab() {
  return (
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
  );
}

function PasswordTab() {
  return <TabsContent value="password">Change your password here.</TabsContent>;
}

export { TabsLayout, AccountTab, PasswordTab };
