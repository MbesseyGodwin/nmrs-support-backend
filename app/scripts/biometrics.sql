<<<<<<< HEAD
select
    DISTINCT person_name.family_name,
    person_name.given_name,
    pi.identifier,
    biometricinfo.date_created,
    person.gender
from
    person_name
    left join person on person_name.person_name_id = person.person_id
    left join patient_identifier pi on pi.patient_id = person_name.person_name_id
    and pi.identifier_type = 4
    left join biometricinfo on person_name.person_name_id = biometricinfo.patient_Id
where
    (
        biometricinfo.template like 'Rk1S%'
        or CONVERT(new_template USING utf8) LIKE 'Rk1S%'
    )
ORDER BY
=======
select
    DISTINCT person_name.family_name,
    person_name.given_name,
    pi.identifier,
    biometricinfo.date_created,
    person.gender
from
    person_name
    left join person on person_name.person_name_id = person.person_id
    left join patient_identifier pi on pi.patient_id = person_name.person_name_id
    and pi.identifier_type = 4
    left join biometricinfo on person_name.person_name_id = biometricinfo.patient_Id
where
    (
        biometricinfo.template like 'Rk1S%'
        or CONVERT(new_template USING utf8) LIKE 'Rk1S%'
    )
ORDER BY
>>>>>>> 57025c71a8a25b7e8c2bea966a16d6e1a60ed3e5
    person_name.person_name_id