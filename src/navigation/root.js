import React, {Component, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
// Login
import OnBoarding from '../screen/SignUp/onBoarding';
import PhoneNumber from '../screen/SignUp/phoneNumber';
import ForgotPassword from '../screen/Login/forgotPassword';
import NewPassword from '../screen/Login/newPassworad/idnex';
import RepeatedPassword from '../screen/repeatedPassword';
// SignUp
import Register from '../screen/SignUp/register';
import Address from '../screen/address';
import Email from '../screen/email';
import OTP from '../screen/Login/OTP';
import Welcome from '../screen/welcome';
import SignUpPassword from '../screen/SignUp/signUpPassword';
import SignUpReapetPassword from '../screen/SignUp/signupReapetPassword';
import BottomTab from './BottomTab';
import SendMoney from '../screen/Send/sendMoney';
import SelectCountry from '../screen/Send/selectCountry';
import Payment from '../screen/Send/payment';
import Card from '../screen/card';
import CardNo from '../screen/cardNo';
import Loading from '../screen/loading';
import Loader from '../screen/verifyId/Loader';
import Acccount from '../screen/Profile/account';
import PaymentSuccessful from '../screen/paymentSuccessful';
import Request from '../screen/Requests/request/Request';
import RrquestDone from '../screen/Requests/request/RrquestDone';
import Success from '../screen/SignUp/sucess/Success';
import VerifyId from '../screen/verifyId/VerifyId';
import VerifyPhoto from '../screen/verifyId/VerifyPhoto';
import PhotoId from '../screen/verifyId/PhotoId';
import Scanner from '../screen/verifyId/Scanner';
import ReviewScan from '../screen/verifyId/ReviewScan';
import CounteryPicker from '../screen/verifyId/CountryModal';
import SendMoneyCard from '../screen/Send/sendMoneyCard';
import SendMoneyToCard from '../screen/Send/sendMoneyToCard';
import ScanPassport from '../screen/verifyId/ScanPassport';
import DriverLicense from '../screen/verifyId/DriverLicense';
import IdentityCard from '../screen/verifyId/IdentityCard';
import ScanResidence from '../screen/verifyId/ScanResidence';
import VerifyId2 from '../screen/verifyId2';
import HowToSendMoney from '../screen/Send/howToSendMoney';
import WhoTo from '../screen/Send/sendMoneyCard/items/whoTo';
import AccountInfo from '../screen/Send/sendMoneyCard/items/accountInfo';
import SendMoneyBymb from '../screen/Send/sendMoneyBymb';
import SendMoneyTo from '../screen/Send/sendMoneyToCard';
import HowToPay from '../screen/Send/sendMoneyBymb/screens/howToPay';
import addCardDetails from '../screen/Send/sendMoneyBymb/screens/addCardDetails';
import PaymentSummary from '../screen/Send/sendMoneyBymb/screens/paymentSummary';
import PersonalInfo from '../screen/Profile/account/screens/personalInfo';
import Support from '../screen/Profile/account/screens/support';
import CardBankAccount from '../screen/Profile/account/screens/cardBankAccount';
import Notification from '../screen/notification';
import InviteSent from '../screen/Send/sendMoneyBymb/screens/inviteSent';
import Index from '../screen/personal_Address';
import EmailError from '../screen/ErrorPages/EmailError/EmailError';
import CodeError from '../screen/ErrorPages/CodeError/CodeError';
import RequestPhoneNumber from '../screen/Requests/request/Screens/RequestPhoneNumber';
import Pincode from '../screen/Pincode/Pincode';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Auth Stack */}
      <Stack.Screen name={routes.on_boarding} component={OnBoarding} />
      <Stack.Screen name={routes.phone_number} component={PhoneNumber} />
      <Stack.Screen name={routes.forgot_password} component={ForgotPassword} />
      <Stack.Screen name={routes.new_password} component={NewPassword} />
      <Stack.Screen
        name={routes.repeated_password}
        component={RepeatedPassword}
      />
      <Stack.Screen name={routes.register} component={Register} />
      <Stack.Screen name={routes.address} component={Address} />
      <Stack.Screen name={routes.email} component={Email} />
      <Stack.Screen name={routes.otp} component={OTP} />
      <Stack.Screen name={routes.notification} component={Notification} />
      <Stack.Screen name={routes.welcome} component={Welcome} />
      <Stack.Screen name={routes.signup_password} component={SignUpPassword} />
      <Stack.Screen
        name={routes.signup_repeat_password}
        component={SignUpReapetPassword}
      />

      {/* App Stack */}
      <Stack.Screen name={routes.home_screen} component={BottomTab} />
      <Stack.Screen name={routes.send_money} component={SendMoney} />
      <Stack.Screen name={routes.select_country} component={SelectCountry} />
      <Stack.Screen name={routes.payment} component={Payment} />
      <Stack.Screen name={routes.card} component={Card} />
      <Stack.Screen name={routes.card_no} component={CardNo} />
      <Stack.Screen name={routes.loading} component={Loading} />
      <Stack.Screen name={routes.loader} component={Loader} />
      <Stack.Screen name={routes.email_Error} component={EmailError} />
      <Stack.Screen name={routes.account} component={Acccount} />
      <Stack.Screen
        name={routes.payment_successful}
        component={PaymentSuccessful}
      />
      <Stack.Screen name={routes.Request} component={Request} />
      <Stack.Screen name={routes.pin_code} component={Pincode} />
      <Stack.Screen name={routes.RequestDone} component={RrquestDone} />
      <Stack.Screen name={routes.Success} component={Success} />
      <Stack.Screen name={routes.VerifyId} component={VerifyId} />
      <Stack.Screen name={routes.VerifyPhoto} component={VerifyPhoto} />
      <Stack.Screen name={routes.PhotoId} component={PhotoId} />
      <Stack.Screen name={routes.Scanner} component={Scanner} />
      <Stack.Screen name={routes.personal_Add} component={Index} />
      <Stack.Screen name={routes.code_Error} component={CodeError} />
      <Stack.Screen name={routes.ReviewScan} component={ReviewScan} />
      <Stack.Screen name={routes.CounteryPicker} component={CounteryPicker} />
      <Stack.Screen name={routes.sendMoneyCard} component={SendMoneyCard} />
      <Stack.Screen name={routes.sendMoneyToCard} component={SendMoneyToCard} />
      <Stack.Screen
        name={routes.passport}
        component={ScanPassport}
        options={{
          headerShown: true,
          title: 'Scan Passport',
          headerStyle: {height: 89},
        }}
      />
      <Stack.Screen
        name={routes.license}
        component={DriverLicense}
        options={{
          headerShown: true,
          title: 'Scan Driving License',
          headerStyle: {height: 89},
        }}
      />
      <Stack.Screen
        name={routes.identity_card}
        component={IdentityCard}
        options={{
          headerShown: true,
          title: 'Scan National ID',
          headerStyle: {height: 89},
        }}
      />
      <Stack.Screen
        name={routes.residence_permit}
        component={ScanResidence}
        options={{
          headerShown: true,
          title: 'Scan Residence Permit',
          headerStyle: {height: 89},
        }}
      />
      <Stack.Screen name={routes.verify_id2} component={VerifyId2} />
      <Stack.Screen
        name={routes.how_to_send_money}
        component={HowToSendMoney}
      />
      <Stack.Screen name={routes.who_to} component={WhoTo} />
      <Stack.Screen name={routes.account_info} component={AccountInfo} />
      <Stack.Screen name={routes.send_money_by_mb} component={SendMoneyBymb} />
      <Stack.Screen name={routes.send_money_to} component={SendMoneyTo} />
      <Stack.Screen name={routes.how_to_pay} component={HowToPay} />
      <Stack.Screen name={routes.add_card_details} component={addCardDetails} />
      <Stack.Screen name={routes.payment_summary} component={PaymentSummary} />
      <Stack.Screen name={routes.personal_info} component={PersonalInfo} />
      <Stack.Screen name={routes.support} component={Support} />
      <Stack.Screen name={routes.invite_sent} component={InviteSent} />

      <Stack.Screen
        name={routes.card_bank_account}
        component={CardBankAccount}
      />
      <Stack.Screen
        name={routes.request_mobile_phone}
        component={RequestPhoneNumber}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
export default RootNavigator;
