SELECT (SELECT COUNT(DISTINCT person_id) FROM openmrs.obs WHERE obs.concept_id = 165843 and  obs.`value_coded` = 703 and voided = 0) AS "TOTAL_HST_POS"