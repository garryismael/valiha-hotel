import { Container } from "inversify";
import 'reflect-metadata';

const container = new Container();

const baseUrl = typeof window === 'undefined' ? process.env.BASE_URL : process.env.REA

export default container;
