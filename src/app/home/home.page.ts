import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  displayedColumns: string[] = ['Grant Name', 'Grant Date', 'Contributory Amount', 'Contributory Tranche','Applicable Months','Contribution till Month'];
  dataSource = new MatTableDataSource<any>([
    {
      GrantName: 'Grant name 005',
      GrantDate: '24-Dec-2019',
      ContributoryAmount: '4900',
      ContributoryTranche:'I',
      ApplicableMonths:'4',
      ContributiontillMonth:'1408.00'
    },
    {
      GrantName: 'Grant name 004',
      GrantDate: '23-Dec-2019',
      ContributoryAmount: '5760',
      ContributoryTranche:'III',
      ApplicableMonths:'5',
      ContributiontillMonth:'1408.00'
    },
    {
      GrantName: 'Grant name 003',
      GrantDate: '22-Dec-2019',
      ContributoryAmount: '4900',
      ContributoryTranche:'V',
      ApplicableMonths:'6',
      ContributiontillMonth:'1408.00'
    },
    {
      GrantName: 'Grant name 002',
      GrantDate: '21-Dec-2019',
      ContributoryAmount: '5760',
      ContributoryTranche:'II',
      ApplicableMonths:'7',
      ContributiontillMonth:'1408.00'
    },
    {
      GrantName: 'Grant name 001',
      GrantDate: '20-Dec-2019',
      ContributoryAmount: '4900',
      ContributoryTranche:'I',
      ApplicableMonths:'8',
      ContributiontillMonth:'1408.00'
    },
    {
      GrantName: '',
      GrantDate: '',
      ContributoryAmount: '',
      ContributoryTranche:'',
      ApplicableMonths:'',
      ContributiontillMonth:'Total:190000'
    }
  ]);
 
  displayedColumns1: string[] = ['Grant Name', 'Grant Date', 'Foreiture Credit', 'Veting Tranche','No of Month Survived till date(September 2019)','Applicable Discount','Financial Year'];
  dataSource1 = new MatTableDataSource<any>([
    {
      GrantName: 'Grant 01',
      GrantDate: '25-Jan-2017',
      ForeitureCredit: 'IV',
      VetingTranche:'43,428',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'87,324.00',
      FinancialYear:'F16-17'
    },
    {
      GrantName: 'Grant 01',
      GrantDate: '25-Jan-2017',
      ForeitureCredit: 'IV',
      VetingTranche:'62,552',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'15,937.00',
      FinancialYear:'F17-18'
    },
    {
      GrantName: 'Grant 01',
      GrantDate: '25-Jan-2017',
      ForeitureCredit: 'IV',
      VetingTranche:'16,861',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'27,379.00',
      FinancialYear:'F18-19'
    },
    {
      GrantName: 'Grant 01',
      GrantDate: '25-Jan-2017',
      ForeitureCredit: 'IV',
      VetingTranche:'32,315',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'53,990.00',
      FinancialYear:'F19-20'
    },
    {
      GrantName: 'Grant 01',
      GrantDate: '25-Jan-2017',
      ForeitureCredit: 'V',
      VetingTranche:'16,861',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'927,379.00',
      FinancialYear:'F20-21'
    },
    {
      GrantName: 'Grant 01',
      GrantDate: '25-Jan-2017',
      ForeitureCredit: 'V',
      VetingTranche:'32,315',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'53,990.00',
      FinancialYear:'F21-22'
    },
    {
      GrantName: 'Grant 02',
      GrantDate: '25-Jan-2018',
      ForeitureCredit: 'IV',
      VetingTranche:'(70,168)',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'-382737',
      FinancialYear:'F16-17'
    },
    {
      GrantName: 'Grant 02',
      GrantDate: '25-Jan-2018',
      ForeitureCredit: 'IV',
      VetingTranche:'-19323',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'-105399',
      FinancialYear:'F17-18'
    },
    {
      GrantName: 'Grant 02',
      GrantDate: '25-Jan-2018',
      ForeitureCredit: 'V',
      VetingTranche:'-70168',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'-382737',
      FinancialYear:'F18-19'
    },
    {
      GrantName: 'Grant 02',
      GrantDate: '25-Jan-2018',
      ForeitureCredit: 'V',
      VetingTranche:'(19,323)',
      NoofMonthSurvivedtilldate:'6',
      ApplicableDiscount:'-105399',
      FinancialYear:'F19-20'
    },
    {
      GrantName: '',
      GrantDate: '',
      ForeitureCredit: '',
      VetingTranche:'',
      NoofMonthSurvivedtilldate:'',
      ApplicableDiscount:'',
      FinancialYear:'Total:9100000'
    }
  ]);

}
