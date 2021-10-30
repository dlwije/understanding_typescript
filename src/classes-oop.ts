//classes starts with a capital letter
class Department {
  //instead of declare and again add it on constructor we can declare constructor it self
  //by adding readonly property as below will give an error if we try to change value after initialized
  // private readonly name: string;
  // private id: string;

  //create an static property
  //inside of the class or method can't access this who doesn't have static keyword
  //to access it you had to give class name instead of 'this' keyword
  static companyName = "dinesh & sons";

  //we can restrict directly changing of employee array by adding private access modifier
  protected employees: string[] = [];

  //shorthand variable initialization
  constructor(private id: string, public name: string) {
    this.name = name;
  }

  /* abstract methods */
  //abstract method can only be in abstract classes. abstract class cannot be instantiate
  //if class inherited by abstract class then abstract methods also must be implement in inherited class
  // abstract describe(this: Department): void;

  //adding methods to class
  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  /* static methods */
  static createEmployee(name: string) {
    return { name: name };
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

/* Inheritance */
class ITDepartment extends Department {
  private lastAdmin: string;

  /* getters */
  get mostRecentAddedAdmin() {
    if (this.lastAdmin) {
      return this.lastAdmin;
    }
    throw new Error("No report found");
  }

  /* setters */
  set mostRecentAdmin(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addEmployee(value);
  }

  constructor(id: string, admin: string[]) {
    super(id, "IT");
    this.lastAdmin = admin[0];
  }

  /* overriding methods & protected modifier */
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    //to access employee we need to have a employee in protected state. from that it will give access for inherited classes
    this.employees.push(name);
  }
}

class AccountingDepartment extends Department {
  /* Singletons and private constructors */
  // from this we can restrict to only initiate this cls object one time
  private static instance: AccountingDepartment;

  private constructor(id: string) {
    super(id, "accounting department");
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2");
    return this.instance;
  }
}

//initiate a class object. should pass one argument because it accepting one param
// const accounting = new Department('id1','Accounting');

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

//we cant change this way if we add access modifier like Private.
// accounting.employees[2] = 'Anna';

// accounting.printEmployeeInformation();

// accounting.describe();

//calling to static method
const employee1 = Department.createEmployee("Dinesh");
console.log(employee1);
console.log(Department.companyName);

//initiate a class object. should pass one argument because it accepting one param
const IT = new ITDepartment("id1", ["Accounting"]);

//Max will not add because of override of function
IT.addEmployee("Max");
IT.addEmployee("Manu");

//calling to getter this way. do not add parenthesis when calling to getter
console.log(IT.mostRecentAddedAdmin);

//we cant change this way if we add access modifier like Private.
// accounting.employees[2] = 'Anna';

IT.describe();
IT.name = "NEW NAME";
IT.printEmployeeInformation();

console.log(IT);

//calling to setter function
IT.mostRecentAdmin = "You are end";

//calling in single pattern we cannot instantiate new one instead of calling instantiated method
// const acc = new AccountingDepartment("Acc-01");
const accounting = AccountingDepartment.getInstance();
//if we create another instance then we get same instance now
const accounting1 = AccountingDepartment.getInstance();

console.log(accounting, accounting1);
