// task 5
const regex = /\((\d{3})\) (\d{3})-(\d{4})/;

const str = "(123) 456-7890";

const match = regex.exec(str);

if (match) {
  console.log("Full match:", match[0]);
  console.log("Area code:", match[1]);
  console.log("Central office code:", match[2]);
  console.log("Line number:", match[3]);
} else {
  console.log("No match found.");
}

// task 6
const regex1 = /([^@]+)@([^@]+)/;
const str1 = "example.user@domain.com";
const match1 = regex1.exec(str1)
if (match1){
    console.log("Full Match",match1[0]);
    console.log("UserName",match1[1]);
    console.log("Domain",match1[2]);
}else{
    console.log("No match found");
}
