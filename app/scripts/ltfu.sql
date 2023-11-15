SELECT
pid1.identifier AS PEPFAR_ID,
pid2.identifier AS HOSP_ID,
person_name.given_name AS FirstName,
person_name.family_name AS LastName,
person_name.middle_name AS MiddleName,
person.birthdate AS DOB,
person.gender AS SEX,
TIMESTAMPDIFF(YEAR,person.birthdate,CURDATE()) AS AGE,
person.creator,
CONCAT(person_address.address1 ," ",person_address.address2 ," ",
person_address.city_village ," ",person_address.state_province ) AS PTS_ADDRS,
person.date_created AS ENTRD_DT,
pp1.date_enrolled AS ENROLL_DT_CARE,
pts_last.lst_vst_dt AS LAST_VISIT_DT
FROM patient
LEFT JOIN person ON(patient.patient_id=person.person_id AND person.voided=0)
LEFT JOIN patient_identifier pid1 ON(pid1.identifier_type=4 AND pid1.patient_id=patient.patient_id AND pid1.voided=0)
LEFT JOIN patient_identifier pid2 ON(pid2.identifier_type=5 AND pid2.patient_id=patient.patient_id AND pid2.voided=0)
LEFT JOIN person_name ON(patient.patient_id=person_name.person_id AND person_name.voided=0)
LEFT JOIN person_address ON(patient.patient_id=person_address.person_id AND person_address.voided=0)
LEFT JOIN users ON(patient.creator=users.user_id)
LEFT JOIN patient_program pp1 ON(pp1.patient_id=patient.patient_id AND pp1.program_id=1 AND pp1.voided=0)
LEFT JOIN (SELECT encounter.patient_id,MAX(encounter.encounter_datetime) AS lst_vst_dt FROM encounter GROUP BY encounter.patient_id) 
AS  pts_last ON(pts_last.patient_id=patient.patient_id)
WHERE TIMESTAMPDIFF(MONTH,pts_last.lst_vst_dt,CURDATE()) >0 AND pp1.program_id=1 AND patient.voided=0;