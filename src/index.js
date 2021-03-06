import { AlertService } from './app/alert.service';
import { run } from './app/app';
import { ComponentService } from './app/component.service';
import "./main.scss";
import "./main.css";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);