URL: javascript:
var recordId = thisEntity.id;
var enquiryModule = "Enquiries";
var dealModule = "Deals";

var enquiryRecord = zoho.crm.getRecordById(enquiryModule, recordId.toLong());

var createMap = map();
createMap.put("Account_Name", enquiryRecord.get("Account_Name") ? enquiryRecord.get("Account_Name").get("id") : null);
createMap.put("Owner", enquiryRecord.get("Owner") ? enquiryRecord.get("Owner").get("id") : null);
createMap.put("Mobile", enquiryRecord.get("Phone"));
createMap.put("Email", enquiryRecord.get("Email"));
createMap.put("Contact_Name", enquiryRecord.get("Contact_Person") ? enquiryRecord.get("Contact_Person").get("id") : null);
createMap.put("Deal_Name", enquiryRecord.get("Enquiry_Name"));
createMap.put("Enquiry_Number", enquiryRecord.get("Name"));
createMap.put("Type", enquiryRecord.get("Enquiry_Type"));
createMap.put("Enquiry_Regarding", enquiryRecord.get("Enquiry_about"));

var createDeal = zoho.crm.create(dealModule, createMap);
