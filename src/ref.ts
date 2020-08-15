// import * as path from "path";
// import * as fs from "fs";
// import * as jwt from "jsonwebtoken";
// import * as Handlebars from "handlebars";
// import { Transport, createTransport } from "nodemailer";
// // import { log } from "./Log";
// import { hashSync, compareSync } from "bcrypt";

// export class App {
//     private static uniqueId: number = 0;
//     public static TOKEN_MESSAGE = "Please enter the token.";
//     public static SAVED_SUCCESSFULLY = "Saved Successfully.";
//     public static REMOVED_SUCCESSFULLY = "Removed Successfully.";
//     public static INVALID_DATA = "Please enter valid data.";
//     public static NON_ALPHA_NUMARIC = /[^\w\s]/g;

//     public static UniqueNumber(): string {
//     var time: number = new Date().getTime();
//     if (this.uniqueId == time) {
//         while (new Date().getTime() < 1 + time) {}
//         time = new Date().getTime();
//     }
//     this.uniqueId = time;
//     return time.toString(36).toUpperCase();
//     }

//     public static getUniqueNumericNum() {
//     var time: string = new Date().getTime() + "";
//     let sliceIndex = time.length - 10;
//     return time.slice(sliceIndex);
//     }

//     public static UniqueID(name: string, type?: string): string {
//     var str: string = "";

//     if (type) {
//         str = type + "_" + name;
//     } else {
//         str = name + "_" + App.UniqueNumber();
//     }
//     str = str.replace(App.NON_ALPHA_NUMARIC, "_");
//     str = str.replace(/\s/g, "_");
//     str = str.substr(0, 128);
//     return str.toUpperCase();
//     }

//     public static Send(req: any, res: any, promise: any) {
//     var respObj: any = {};
//     promise
//         .then((data: any) => {
//         respObj.status = 1;
//         respObj.data = data;
//         res.jsonp(respObj);
//         })
//         .catch((err: any) => {
//         log.info(err);
//         respObj.status = 0;
//         respObj.error = err;
//         res.jsonp(respObj);
//         });
//     }
//     public static HtmlRender(fileName: string, data: Object) {
//     var source = path.join(__dirname, "/../../assets/templates/" + fileName + ".html");
//     // log.info("Html Source: " + source);
//     source = fs.readFileSync(source, "utf8");
//     var template = Handlebars.compile(source);
//     data = JSON.parse(JSON.stringify(data));
//     var result = template(data);

//     // log.info(result);
//     return result;
//     }

//     public static EncodeJWT(data: any) {
//     return jwt.sign(data, "SwanInfo", { expiresIn: "24h" });
//     }
//     public static RefreshJWT(data: any) {
//     return jwt.sign(data, "SwanInfo", { expiresIn: "24h" });
//     }
//     public static DecodeJWT(token: any) {
//     if (token) {
//         try {
//         token = token.replace("jwt ", "").replace("JWT ", "");
//         return jwt.verify(token, "SwanInfo");
//         } catch (err) {
//         return { name: "error", message: "Token is not valid" };
//         }
//     } else {
//         return { name: "error", message: "Auth token is not supplied" };
//     }
//     }

//     private static transport: any = null;
//     public static CreateEmailAccount() {
//     if (!this.transport) {

//     const mailOptionsss = {
//       host: 'dkjfd',
//       port: 'kfhkj',
//       user: 'djfd',
//       pass: 'fldjl'
//     }
//         this.transport = createTransport({
//         host: mailOptionsss.host,
//         port: mailOptionsss.port,
//         secure: true,
//         service:"gmail",
//         requireTLS: false,

//         auth: {
//             user: mailOptionsss.user,
//             pass: mailOptionsss.pass,
//         },
//         tls: {
//             rejectUnauthorized: false,
//         },
//         });
//     }

//     return this.transport;
//     }
//     public static async SendMail(to: string, subject: string, htmlPage: string, renderData: any) {
//     let transporter = App.CreateEmailAccount();

//     const mailOptions = {
//         from: mailOptions.user,
//         to: to,
//         subject: subject,
//         html: App.HtmlRender(htmlPage, {
//         data: renderData,
//         }),
//     };

//     return new Promise((reslove, reject) => {
//         transporter.sendMail(mailOptions, (err: any, info: any) => {
//         console.log(info);
//         if (err) {
//             reject(err);
//         }
//         reslove({
//             message: "Mail sent successfully",
//         });
//         });
//     });
//     }
//     public static ValildateUserAccess(data: any, component: String, access: String) {
//     log.info(data);
//     if (data) {
//         if (data.name && data.message && data.name.lowercase().indexOf("error") > -1) {
//         return false;
//         } else {
//         return true;
//         }
//     } else {
//         return false;
//     }
//     }
//     public static DaysBack(date: Date, days: number) {
//     date = new Date(date);
//     date.setDate(date.getDate() - days);
//     date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//     return date;
//     }

//     public static DaysDiff(d1: Date, d2: Date): number {
//     var t2: number = d2.getTime();
//     var t1: number = d1.getTime();
//     let diff: any = (t2 - t1) / (24 * 3600 * 1000);
//     return parseInt(diff);
//     }

//     public static PrintLog(routerName: string, routerType: string, sessionInfo: any) {
//     log.info(`${new Date().toISOString()} : ${routerName} :  ${routerType} : ${JSON.stringify(sessionInfo)}`);
//     }

//     public static DateNow() {
//     return new Date().toISOString();
//     }

//     public static HashSync(data: string) {
//     return hashSync(data, 8);
//     }

//     public static HashCompareSync(param1: string, param2: string) {
//     return compareSync(param1, param2);
//     }

//     public static ArrayJoin(items: any[], attr: string) {
//     let attrs: any[] = [];
//     console.log(items);
//     items.forEach((element: any) => {
//         attrs.push(element[attr]);
//     });
//     return attrs.join(",");
//     }

// }
