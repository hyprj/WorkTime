import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { About } from "../views/About/About";
import { Employee } from "../views/Employee/Employee";
import { NotFound } from "../views/NotFound/NotFound";
import { Navbar } from "../layout/Navbar/Navbar";
import { Schedule } from "../views/Schedule/Schedule";
import { Access } from "../views/Access/Access";
import { LoginForm } from "../views/Access/Login/LoginForm";
import { RegisterForm } from "../views/Access/Register/RegisterForm";
import { Management } from "../views/Management/Management";
import { Footer } from "../layout/Footer/Footer";
import { useAccess } from "../context/AccessContext";

export {
  React,
  About,
  Employee,
  NotFound,
  Navbar,
  Schedule,
  LoginForm,
  RegisterForm,
  Access,
  Management,
  useAccess,
  Footer,
  Router,
  Routes,
  Route,
  Navigate,
  useContext,
};
