
@Component({
 selector: 'app-purchases',
 templateUrl: './purchases.component.html',
 styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

 activePlan = {
   currenPlanName: "-",
   startDate: "-",
   endDate: "-",
   nextPaymentAmount: "-",
   nextBillingDate: "-"
 }
 data;
 access_token;
 userId;
 isStartupPlan: boolean = false;

 constructor(
   private paymentService: PaymentService,
   private router: Router,
   private localStorage: LocalStorageService,
   private spinnerService: Ng4LoadingSpinnerService,
 ) { }

 ngOnInit() {
   if (this.localStorage.get("loggedInUserData") === null) {
     this.router.navigate(["login"]);
     return;
   } else {
     this.access_token = this.localStorage.get("loggedInUserData").tokenData.access_token;
     this.userId = this.localStorage.get("userData").id;
     this.getPurchaseHistory(this.userId, this.access_token);
   }
 }
