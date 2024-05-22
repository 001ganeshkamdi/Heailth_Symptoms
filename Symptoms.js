document.getElementById('symptomForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const enteredSymptom = document.getElementById('symptom').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    const matchingDiseases = diseases.filter(disease => {
        return disease.symptoms.some(symptom => symptom.toLowerCase().includes(enteredSymptom));
    });

    if (matchingDiseases.length > 0) {
        const resultList = document.createElement('ul');
        matchingDiseases.forEach(disease => {
            const listItem = document.createElement('li');
            listItem.textContent = disease.name;
            resultList.appendChild(listItem);
        });
        resultDiv.appendChild(resultList);
    } else {
        resultDiv.textContent = "No matching diseases found.";
    }
});
const diseases = [
    {
        name: "Abdominal Aortic Aneurysm (AAA)",
        symptoms: ["Abdominal pain", "Back pain", "Pulsating feeling near the navel"],
    },
    {
        name: "Abnormal Uterine Bleeding",
        symptoms: ["Heavy menstrual bleeding", "Bleeding between periods", "Irregular periods"],
    },
    {
        name: "ACL Injury",
        symptoms: ["Pain", "Swelling", "Instability in the knee"],
    },
    {
        name: "Acne",
        symptoms: ["Whiteheads", "Blackheads", "Pimples"],
    },
    {
        name: "Acute Bronchitis",
        symptoms: ["Cough", "Sore throat", "Fatigue"],
    },
    {
        name: "Addison’s Disease",
        symptoms: ["Fatigue", "Weakness", "Darkening of the skin"],
    },
    {
        name: "ADHD in Children: Symptoms, Diagnosis, and Support",
        symptoms: ["Inattention", "Hyperactivity", "Impulsivity", "Difficulty in focusing"],
    },
    {
        name: "Adhesive Capsulitis (Frozen Shoulder)",
        symptoms: ["Shoulder pain", "Stiffness", "Limited range of motion"],
    },
    {
        name: "Adult ADHD",
        symptoms: ["Difficulty concentrating", "Disorganization", "Impulsivity"],
    },
    {
        name: "AIDS",
        symptoms: ["Rapid weight loss", "Recurring fever", "Fatigue"],
    },
    {
        name: "Alcohol Abuse",
        symptoms: ["Excessive drinking", "Lack of control", "Continued use despite consequences"],
    },
    {
        name: "Allergic Conjunctivitis",
        symptoms: ["Redness", "Itching", "Watery eyes"],
    },
    {
        name: "Allergic Rhinitis (Allergies)",
        symptoms: ["Sneezing", "Runny or stuffy nose", "Itchy or watery eyes"],
    },
    {
        name: "Alopecia Areata (AA)",
        symptoms: ["Hair loss", "Bald patches on the scalp", "Tingling or pain in the affected area"],
    },
    {
        name: "Alzheimer's Disease",
        symptoms: ["Memory loss", "Confusion", "Difficulty in completing familiar tasks"],
    },
    {
        name: "Amblyopia",
        symptoms: ["Decreased vision", "Misaligned eyes", "Poor depth perception"],
    },
    {
        name: "Amenorrhea",
        symptoms: ["Absence of menstrual periods", "Infrequent menstrual periods", "Difficulty getting pregnant"],
    },
    {
        name: "Anal Fissure",
        symptoms: ["Pain during bowel movements", "Blood in stool", "Anal itching"],
    },
    {
        name: "Anal Fistulas",
        symptoms: ["Pain", "Swelling", "Fever"],
    },
    {
        name: "Anaphylaxis",
        symptoms: ["Difficulty breathing", "Hives or rash", "Swelling of the face, lips, or throat"],
    },
    {
        name: "Anemia",
        symptoms: ["Fatigue", "Weakness", "Pale skin", "Shortness of breath"],
    },
    {
        name: "Angina",
        symptoms: ["Chest pain or discomfort", "Pain in arms, neck, jaw, or back", "Shortness of breath"],
    },
    {
        name: "Ankle Sprains",
        symptoms: ["Pain", "Swelling", "Bruising"],
    },
    {
        name: "Appendicitis",
        symptoms: ["Abdominal pain", "Loss of appetite", "Nausea", "Vomiting"],
    },
    {
        name: "Arrhythmia",
        symptoms: ["Fluttering in the chest", "Rapid heartbeat", "Shortness of breath"],
    },
    {
        name: "Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC)",
        symptoms: ["Palpitations", "Fainting", "Shortness of breath"],
    },
    {
        name: "Asperger's Syndrome",
        symptoms: ["Difficulty in social interaction", "Repetitive behavior", "Fixated interests"],
    },
    {
        name: "Asthma",
        symptoms: ["Shortness of breath", "Wheezing", "Coughing"],
    },
    {
        name: "Asthma in Kids",
        symptoms: ["Coughing", "Wheezing", "Shortness of breath"],
    },
    {
        name: "Atherosclerosis",
        symptoms: ["Chest pain", "Leg pain", "Shortness of breath"],
    },
    {
        name: "Attention-Deficit Hyperactivity Disorder (ADHD)",
        symptoms: ["Inattention", "Hyperactivity", "Impulsivity", "Difficulty in focusing"],
    },
    {
        name: "Autism",
        symptoms: ["Difficulty in social interaction", "Repetitive behavior", "Communication challenges"],
    },
    {
        name: "Avian Flu",
        symptoms: ["Fever", "Cough", "Sore throat"],
    },
    {
        name: "Babesiosis",
        symptoms: ["Fever", "Chills", "Fatigue"],
    },
    {
        name: "Bacterial Endocarditis",
        symptoms: ["Fever", "Chills", "Fatigue"],
    },
    {
        name: "Bacterial Vaginosis (BV)",
        symptoms: ["Vaginal discharge", "Vaginal odor", "Vaginal itching or irritation"],
    },
    {
        name: "Barrett’s Esophagus",
        symptoms: ["Heartburn", "Difficulty swallowing", "Chest pain"],
    },
    {
        name: "Bartholin's Gland Cyst",
        symptoms: ["Pain or discomfort in the genital area", "Swelling", "Redness"],
    },
    {
        name: "Bedbugs",
        symptoms: ["Itchy, red bites on the skin", "Skin rash", "Bloodstains on bedding"],
    },
    {
        name: "Bell’s Palsy",
        symptoms: ["Facial weakness or paralysis", "Drooping of one side of the face", "Difficulty closing one eye"],
    },
    {
        name: "Benign Breast Conditions",
        symptoms: ["Breast lump or mass", "Breast pain", "Nipple discharge"],
    },
    {
        name: "Benign Paroxysmal Positional Vertigo (BPPV)",
        symptoms: ["Dizziness", "Vertigo (spinning sensation)", "Nausea"],
    },
    {
        name: "Benign Prostatic Hyperplasia (BPH)",
        symptoms: ["Frequent urination", "Difficulty starting or maintaining urination", "Weak urine stream"],
    },
    {
        name: "Bipolar Disorder",
        symptoms: ["Manic episodes", "Depressive episodes", "Mood swings"],
    },
    {
        name: "Bladder Stones",
        symptoms: ["Pain or discomfort in the lower abdomen", "Frequent urination", "Blood in urine"],
    },
    {
        name: "Blepharospasm",
        symptoms: ["Involuntary blinking or twitching of the eyelids", "Eye irritation", "Sensitivity to light"],
    },
    {
        name: "Bloating",
        symptoms: ["Feeling of fullness or tightness in the abdomen", "Abdominal distension", "Gas"],
    },
    {
        name: "Blood Clots",
        symptoms: ["Swelling", "Pain or tenderness", "Red or discolored skin"],
    },
    {
        name: "Blood Poisoning",
        symptoms: ["Fever", "Chills", "Rapid breathing"],
    },
    {
        name: "Bone Cancer",
        symptoms: ["Bone pain", "Swelling or tenderness near the affected area", "Fractures"],
    },
    {
        name: "Breast Cancer",
        symptoms: ["Breast lump or mass", "Changes in breast size or shape", "Skin changes on the breast"],
    },
    {
        name: "Breast Pain in Women",
        symptoms: ["Breast tenderness", "Breast swelling", "Sharp or burning breast pain"],
    },
    {
        name: "Bronchiolitis",
        symptoms: ["Runny or stuffy nose", "Cough", "Wheezing"],
    },
    {
        name: "Burners",
        symptoms: ["Burning or tingling sensation", "Numbness", "Weakness"],
    },
    {
        name: "Burning Mouth Syndrome",
        symptoms: ["Burning sensation in the mouth", "Dry mouth", "Taste changes"],
    },
    {
        name: "Bursitis of the Hip",
        symptoms: ["Hip pain", "Swelling", "Stiffness"],
    },
    {
        name: "C. diff (Clostridium difficile) Infection",
        symptoms: ["Watery diarrhea", "Fever", "Abdominal pain"],
    },
    {
        name: "Cancer",
        symptoms: ["Unexplained weight loss", "Fatigue", "Pain"],
    },
    {
        name: "Canker Sores",
        symptoms: ["Painful sores in the mouth", "Tingling or burning sensation before the sores appear", "Difficulty eating or drinking"],
    },
    {
        name: "Cardiomyopathy",
        symptoms: ["Shortness of breath", "Fatigue", "Swelling of the legs or ankles"],
    },
    {
        name: "Carpal Tunnel Syndrome",
        symptoms: ["Numbness or tingling in the hand or fingers", "Weakness in the hand", "Pain or discomfort in the wrist"],
    },
    {
        name: "Cat-Scratch Disease (Cat-Scratch Fever)",
        symptoms: ["Fever", "Fatigue", "Swollen lymph nodes"],
    },
    {
        name: "Celiac Disease",
        symptoms: ["Digestive issues", "Fatigue", "Skin rash"],
    },
    {
        name: "Cellulitis",
        symptoms: ["Red, swollen, and painful skin", "Warmth in the affected area", "Fever"],
    },
    {
        name: "Central Precocious Puberty",
        symptoms: ["Early development of sexual characteristics", "Growth spurts", "Behavioral changes"],
    },
    {
        name: "Cerebral Palsy",
        symptoms: ["Muscle stiffness or weakness", "Poor coordination", "Difficulty walking"],
    },
    {
        name: "Cervical Cancer",
        symptoms: ["Abnormal vaginal bleeding", "Pelvic pain", "Pain during sex"],
    },
    {
        name: "Cervical Dysplasia",
        symptoms: ["Abnormal Pap smear results", "Pelvic pain", "Abnormal vaginal bleeding"],
    },
    {
        name: "Cervical Dystonia",
        symptoms: ["Involuntary muscle contractions in the neck", "Head tremors", "Neck pain"],
    },
    {
        name: "Cervical Spondylotic Myelopathy (CSM)",
        symptoms: ["Neck pain", "Numbness or weakness in the arms or legs", "Difficulty walking"],
    },
    {
        name: "Chickenpox",
        symptoms: ["Rash", "Fever", "Fatigue"],
    },
    {
        name: "Chlamydia",
        symptoms: ["Painful urination", "Abnormal vaginal discharge", "Pelvic pain"],
    },
    {
        name: "Chronic Bronchitis",
        symptoms: ["Persistent cough", "Excessive mucus production", "Shortness of breath"],
    },
    {
        name: "Chronic Cough",
        symptoms: ["Persistent cough", "Coughing up blood", "Shortness of breath"],
    },
    {
        name: "Chronic Fatigue Syndrome",
        symptoms: ["Fatigue", "Muscle pain", "Difficulty concentrating"],
    },
    {
        name: "Chronic Kidney Disease (CKD)",
        symptoms: ["Swelling of the legs, ankles, feet, or face", "Fatigue", "Shortness of breath"],
    },
    {
        name: "Chronic Obstructive Pulmonary Disease (COPD)",
        symptoms: ["Shortness of breath", "Chronic cough", "Wheezing"],
    },
    {
        name: "Chronic Pain",
        symptoms: ["Persistent pain", "Decreased mobility", "Fatigue"],
    },
    {
        name: "Chronic Pelvic Pain",
        symptoms: ["Pelvic pain", "Pain during intercourse", "Urinary issues"],
    },
    {
        name: "Cirrhosis and Portal Hypertension",
        symptoms: ["Fatigue", "Weakness", "Yellowing of the skin and eyes (jaundice)"],
    },
    {
        name: "Cleft Lip and Cleft Palate",
        symptoms: ["Visible split or opening in the lip or palate", "Difficulty feeding", "Speech problems"],
    },
    {
        name: "Club Drug Use",
        symptoms: ["Impaired judgment", "Memory loss", "Increased heart rate"],
    },
    {
        name: "Clubfoot",
        symptoms: ["Foot pointing down and inward", "Smaller calf muscles", "Limited range of motion in the foot and ankle"],
    },
    {
        name: "Colds and the Flu",
        symptoms: ["Sore throat", "Runny or stuffy nose", "Cough", "Fever"],
    },
    {
        name: "Colic",
        symptoms: ["Intense crying or fussiness in an otherwise healthy baby", "Clenched fists", "Red face"],
    },
    {
        name: "Colorectal Cancer",
        symptoms: ["Blood in stool", "Change in bowel habits", "Abdominal discomfort"],
    },
    {
        name: "Complex Regional Pain Syndrome",
        symptoms: ["Chronic, severe pain", "Swelling", "Changes in skin temperature or color"],
    },
    {
        name: "Concussion",
        symptoms: ["Headache", "Confusion", "Nausea or vomiting"],
    },
    {
        name: "Congenital Adrenal Hyperplasia",
        symptoms: ["Ambiguous genitalia in females", "Excessive body hair growth", "Salt craving"],
    },
    {
        name: "Congenital Heart Disease",
        symptoms: ["Shortness of breath", "Fatigue", "Poor growth"],
    },
    {
        name: "Constipation",
        symptoms: ["Infrequent bowel movements", "Difficulty passing stools", "Abdominal discomfort"],
    },
    {
        name: "Corneal Abrasions",
        symptoms: ["Eye pain", "Feeling of something in the eye", "Watery eyes"],
    },
    {
        name: "Coronary Artery Disease (CAD)",
        symptoms: ["Chest pain or discomfort", "Shortness of breath", "Heart palpitations"],
    },
    {
        name: "Coronavirus (COVID-19)",
        symptoms: ["Fever", "Cough", "Shortness of breath"],
    },
    {
        name: "Coronavirus Disease 2019 (COVID-19)",
        symptoms: ["Fever", "Cough", "Shortness of breath"],
    },
    {
        name: "Crohn’s Disease",
        symptoms: ["Abdominal pain", "Diarrhea", "Fatigue"],
    },
    {
        name: "Croup",
        symptoms: ["Barking cough", "Hoarse voice", "Difficulty breathing"],
    },
    {
        name: "Cushing's Syndrome",
        symptoms: ["Weight gain", "High blood pressure", "Fatigue"],
    },
    {
        name: "Cystic Fibrosis (CF)",
        symptoms: ["Chronic cough with thick mucus", "Frequent lung infections", "Poor growth"],
    },
    {
        name: "Cytomegalovirus",
        symptoms: ["Fever", "Fatigue", "Sore throat"],
    },
    {
        name: "De Quervain’s Tenosynovitis",
        symptoms: ["Pain and swelling near the base of the thumb", "Difficulty gripping or pinching", "Thumb stiffness"],
    },
    {
        name: "Deep Vein Thrombosis",
        symptoms: ["Swelling", "Pain or tenderness", "Warmth and redness"],
    },
    {
        name: "Dementia",
        symptoms: ["Memory loss", "Difficulty communicating", "Impaired reasoning"],
    },
    {
        name: "Depression",
        symptoms: ["Persistent sadness", "Loss of interest or pleasure in activities", "Changes in appetite or weight"],
    },
    {
        name: "Diabetes",
        symptoms: ["Frequent urination", "Increased thirst", "Unexplained weight loss"],
    },
    {
        name: "Diabetes in Kids - Signs and Causes",
        symptoms: ["Increased thirst", "Frequent urination", "Fatigue"],
    },
    {
        name: "Diabetes Insipidus",
        symptoms: ["Excessive thirst", "Excessive urination", "Weakness"],
    },
    {
        name: "Diabetic Ketoacidosis",
        symptoms: ["Excessive thirst", "Frequent urination", "Nausea or vomiting"],
    },
    {
        name: "Diabetic Nephropathy",
        symptoms: ["Swelling of the ankles, feet, or hands", "Fatigue", "Foamy urine"],
    },
    {
        name: "Diabetic Neuropathy",
        symptoms: ["Numbness or tingling in the hands or feet", "Sharp pain", "Loss of balance or coordination"],
    },
    {
        name: "Diabetic Retinopathy",
        symptoms: ["Blurry or distorted vision", "Floaters", "Difficulty seeing at night"],
    },
    {
        name: "Diaper Rash",
        symptoms: ["Redness or irritation in the diaper area", "Warmth", "Peeling skin"],
    },
    {
        name: "Diverticular Disease (Diverticulitis)",
        symptoms: ["Abdominal pain, usually on the left side", "Fever", "Nausea or vomiting"],
    },
    {
        name: "Bipolar Disorder",
        symptoms: ["Mood swings", "Depression", "Mania or hypomania"],
    },
    {
        name: "Down Syndrome",
        symptoms: ["Distinct facial features", "Developmental delays", "Poor muscle tone"],
    },
    {
        name: "Dysmenorrhea",
        symptoms: ["Pelvic pain", "Cramping", "Lower back pain"],
    },
    {
        name: "Dysphagia",
        symptoms: ["Difficulty swallowing", "Pain while swallowing", "Feeling of food stuck in the throat"],
    },
    {
        name: "E. coli Infection",
        symptoms: ["Abdominal cramping", "Diarrhea (often bloody)", "Nausea or vomiting"],
    },
    {
        name: "Ear Infection",
        symptoms: ["Ear pain", "Fever", "Difficulty hearing"],
    },
    {
        name: "Early Pregnancy Loss",
        symptoms: ["Vaginal bleeding or spotting", "Abdominal cramping", "Passing tissue from the vagina"],
    },
    {
        name: "Eating Disorders",
        symptoms: ["Extreme emotions, attitudes, and behaviors surrounding weight and food", "Distorted body image", "Excessive exercise"],
    },
    {
        name: "Ebola Virus Disease",
        symptoms: ["Fever", "Severe headache", "Muscle pain"],
    },
    {
        name: "Echinococcosis",
        symptoms: ["Abdominal pain", "Chest pain", "Cough"],
    },
    {
        name: "Ectopic Pregnancy",
        symptoms: ["Vaginal bleeding", "Abdominal pain", "Shoulder pain"],
    },
    {
        name: "Eczema and Atopic Dermatitis",
        symptoms: ["Dry, itchy skin", "Red to brownish-gray patches", "Small, raised bumps"],
    },
    {
        name: "Edema",
        symptoms: ["Swelling", "Puffiness", "Stretched or shiny skin"],
    },
    {
        name: "Endometrial Cancer",
        symptoms: ["Abnormal vaginal bleeding", "Pelvic pain", "Pain during intercourse"],
    },
    {
        name: "Endometrial Hyperplasia",
        symptoms: ["Abnormal vaginal bleeding", "Heavy menstrual periods", "Pelvic pain"],
    },
    {
        name: "Endometriosis",
        symptoms: ["Pelvic pain", "Painful periods", "Pain during intercourse"],
    },
    {
        name: "Enlarged Adenoids",
        symptoms: ["Breathing through the mouth", "Noisy breathing", "Snoring"],
    },
    {
        name: "Epilepsy",
        symptoms: ["Seizures", "Temporary confusion", "Uncontrollable jerking movements of the arms and legs"],
    },
    {
        name: "Eosinophilic Esophagitis",
        symptoms: ["Difficulty swallowing", "Chest pain", "Food getting stuck in the throat"],
    },
    {
        name: "Erectile Dysfunction (ED)",
        symptoms: ["Difficulty getting or keeping an erection", "Reduced sexual desire", "Premature ejaculation"],
    },
    {
        name: "Esophageal Atresia and Tracheoesophageal Fistula",
        symptoms: ["Frothy bubbles of saliva in the mouth", "Difficulty breathing", "Coughing or choking while feeding"],
    },
    {
        name: "Essential Tremor",
        symptoms: ["Shaking or trembling", "Worsening with movement", "Improvement with rest"],
    },
    {
        name: "Eustachian Tube Dysfunction",
        symptoms: ["Ear pressure", "Ear pain", "Hearing loss"],
    },
    {
        name: "Exercise-induced Bronchospasm",
        symptoms: ["Coughing", "Wheezing", "Shortness of breath"],
    },
    {
        name: "Exercise-induced Urticaria",
        symptoms: ["Hives", "Itchy skin", "Swelling"],
    },
    {
        name: "Fainting",
        symptoms: ["Lightheadedness", "Sweating", "Blurred vision"],
    },
    // Continue adding diseases
    [
        {
            name: "Febrile Seizures",
            symptoms: ["Fever", "Loss of consciousness", "Convulsions or twitching"],
        },
        {
            name: "Fecal Incontinence",
            symptoms: ["Involuntary bowel movements", "Difficulty controlling bowel movements", "Leakage of stool"],
        },
        {
            name: "Female Athlete Triad",
            symptoms: ["Eating disorder", "Menstrual irregularities", "Decreased bone density"],
        },
        {
            name: "Fetal Alcohol Syndrome",
            symptoms: ["Low birth weight", "Facial abnormalities", "Developmental delays"],
        },
        {
            name: "Fetal Growth Restriction",
            symptoms: ["Low birth weight", "Reduced fetal movements", "Decreased fundal height"],
        },
        {
            name: "Fever in Infants and Children",
            symptoms: ["High body temperature", "Irritability", "Lack of appetite"],
        },
        {
            name: "Fibromyalgia",
            symptoms: ["Widespread pain", "Fatigue", "Sleep disturbances"],
        },
        {
            name: "Fifth Disease",
            symptoms: ["Facial rash (slapped cheek appearance)", "Fever", "Joint pain"],
        },
        {
            name: "Flat Feet",
            symptoms: ["Arch of the foot is flattened", "Pain or discomfort in the foot or lower leg", "Difficulty standing on tiptoes"],
        },
        {
            name: "Flatulence/Gas",
            symptoms: ["Passing gas", "Abdominal bloating", "Abdominal discomfort"],
        },
        {
            name: "Food Allergies",
            symptoms: ["Hives", "Swelling of the lips, tongue, or throat", "Difficulty breathing"],
        },
        {
            name: "Food Poisoning",
            symptoms: ["Nausea", "Vomiting", "Diarrhea"],
        },
        {
            name: "Food Poisoning | Mushroom Poisoning",
            symptoms: ["Nausea", "Vomiting", "Abdominal pain"],
        },
        {
            name: "Fragile X Syndrome",
            symptoms: ["Intellectual disability", "Delayed development", "Behavioral challenges"],
        },
        {
            name: "Galactorrhea",
            symptoms: ["Involuntary discharge of milk from the breasts", "Breast tenderness", "Irregular menstrual periods"],
        },
        {
            name: "Gallstones",
            symptoms: ["Abdominal pain", "Nausea", "Vomiting"],
        },
        {
            name: "Gastroparesis",
            symptoms: ["Nausea", "Vomiting", "Feeling full quickly"],
        },
        {
            name: "Generalized Anxiety Disorder",
            symptoms: ["Excessive worry or anxiety", "Restlessness", "Difficulty concentrating"],
        },
        {
            name: "Genital Warts",
            symptoms: ["Small, flesh-colored bumps", "Itching or discomfort in the genital area", "Bleeding during intercourse"],
        },
        {
            name: "Gestational Diabetes",
            symptoms: ["High blood sugar levels", "Increased thirst", "Frequent urination"],
        },
        {
            name: "Heart Murmurs",
            symptoms: ["Abnormal heart sounds", "Chest pain", "Fatigue"],
        },
        {
            name: "Heart Palpitations",
            symptoms: ["Fluttering or pounding in the chest", "Rapid heartbeat", "Dizziness"],
        },
        {
            name: "Heartburn",
            symptoms: ["Burning sensation in the chest", "Regurgitation of food or sour liquid", "Difficulty swallowing"],
        },
        {
            name: "Heat Exhaustion and Heat Stroke",
            symptoms: ["High body temperature", "Profuse sweating", "Nausea or vomiting"],
        },
        {
            name: "Heat Rash",
            symptoms: ["Red bumps on the skin", "Itching", "Prickling or stinging sensation"],
        },
        {
            name: "HELLP Syndrome",
            symptoms: ["Hemolysis (breakdown of red blood cells)", "Elevated liver enzymes", "Low platelet count"],
        },
        {
            name: "Hemolytic Uremic Syndrome",
            symptoms: ["Bloody diarrhea", "Abdominal pain", "Decreased urine output"],
        },
        {
            name: "Hemorrhoids",
            symptoms: ["Rectal bleeding", "Anal itching or discomfort", "Pain or discomfort during bowel movements"],
        },
        {
            name: "Henoch-Schönlein Purpura",
            symptoms: ["Purple or red spots on the skin", "Joint pain", "Abdominal pain"],
        },
        {
            name: "Hepatitis A",
            symptoms: ["Fatigue", "Nausea and vomiting", "Abdominal pain"],
        },
        {
            name: "Hepatitis B",
            symptoms: ["Fatigue", "Abdominal pain", "Dark urine"],
        },
        {
            name: "Hepatitis C",
            symptoms: ["Fatigue", "Abdominal pain", "Yellowing of the skin and eyes (jaundice)"],
        },
        {
            name: "Hereditary Hemochromatosis",
            symptoms: ["Fatigue", "Joint pain", "Abdominal pain"]
        },
        {
            name: "Hernia",
            symptoms: ["Bulge in the groin or abdomen", "Pain or discomfort", "Feeling of heaviness or pressure"]
        },
        {
            name: "Herniated Disc",
            symptoms: ["Back pain", "Leg pain or numbness", "Weakness in muscles"]
        },
        {
            name: "Herpes",
            symptoms: ["Painful sores or blisters on the genitals or mouth", "Itching or tingling sensation", "Flu-like symptoms"]
        },
        {
            name: "Hidradenitis Suppurativa",
            symptoms: ["Painful lumps or boils under the skin", "Tunnels connecting lumps under the skin", "Scarring"]
        },
        {
            name: "High Blood Pressure",
            symptoms: ["Headaches", "Shortness of breath", "Nosebleeds"]
        },
        {
            name: "High Blood Pressure During Pregnancy",
            symptoms: ["Swelling of the hands and face", "Headaches", "Vision changes"]
        },
        {
            name: "High Cholesterol",
            symptoms: ["Chest pain", "Yellow deposits of cholesterol under the skin", "Nausea"]
        },
        {
            name: "High-Altitude Illness",
            symptoms: ["Headache", "Shortness of breath", "Nausea or vomiting"]
        },
        {
            name: "Hip Fractures",
            symptoms: ["Severe pain in the hip or groin", "Inability to bear weight on the affected leg", "Bruising or swelling"]
        },
        {
            name: "Hip Problems in Infants",
            symptoms: ["Clicking or popping sounds when moving the hip", "Limited range of motion", "Difference in leg lengths"]
        },
        {
            name: "Hirschsprung’s Disease",
            symptoms: ["Failure to pass meconium shortly after birth", "Constipation or difficulty passing stool", "Swollen abdomen"]
        },
        {
            name: "Hirsutism",
            symptoms: ["Excessive hair growth in women", "Thick, dark hair on the face, chest, back, or abdomen", "Acne"]
        },
        {
            name: "HIV",
            symptoms: ["Fever", "Fatigue", "Swollen lymph nodes"]
        },
        {
            name: "Hives (Urticaria)",
            symptoms: ["Raised, itchy welts on the skin", "Swelling of the skin", "Redness"]
        },
        {
            name: "Human Papillomavirus (HPV)",
            symptoms: ["Genital warts", "Abnormal Pap smear results", "Cervical dysplasia"]
        },
        {
            name: "Huntington's Disease",
            symptoms: ["Involuntary movements", "Impaired coordination", "Cognitive decline"]
        },
        {
            name: "Hypercoagulation",
            symptoms: ["Blood clots", "Pain or swelling in the affected area", "Redness or warmth"]
        },
        {
            name: "Hyperhidrosis",
            symptoms: ["Excessive sweating", "Sweating that interferes with daily activities", "Skin infections"]
        },
        {
            name: "Hyperparathyroidism",
            symptoms: ["Weakness", "Fatigue", "Frequent urination"]
        },
        {
            name: "Hyperthyroidism",
            symptoms: ["Weight loss", "Rapid heartbeat", "Anxiety or irritability"]
        },
        {
            name: "Hypopituitarism",
            symptoms: ["Fatigue", "Weight gain", "Decreased libido"]
        },
        {
            name: "Hypothermia",
            symptoms: ["Shivering", "Slurred speech", "Weak pulse"]
        },
        {
            name: "Hypothyroidism",
            symptoms: ["Fatigue", "Weight gain", "Cold intolerance"]
        },
        {
            name: "Idiopathic Thrombocytopenic Purpura (ITP)",
            symptoms: ["Easy bruising", "Bleeding gums", "Petechiae (small, red or purple spots on the skin)"]
        },
        {
            name: "Indigestion (Dyspepsia)",
            symptoms: ["Feeling full during a meal", "Bloating", "Nausea"]
        },
        {
            name: "Infant Jaundice",
            symptoms: ["Yellowing of the skin and eyes", "Poor feeding", "Sleepiness"]
        },
        {
            name: "Infertility",
            symptoms: ["Irregular menstrual cycles", "Painful intercourse", "Obesity"]
        },
        {
            name: "Inflammatory Bowel Disease (IBD)",
            symptoms: ["Abdominal pain", "Diarrhea", "Rectal bleeding"]
        },
        {
            name: "Ingrown Toenails",
            symptoms: ["Pain and tenderness along the edge of the toenail", "Redness", "Swelling"]
        },
        {
            name: "Inhalant Use",
            symptoms: ["Chemical smell on the breath", "Slurred speech", "Impaired coordination"]
        },
        {
            name: "Insect-borne Diseases",
            symptoms: ["Fever", "Rash", "Joint pain"]
        },
        {
            name: "Insomnia",
            symptoms: ["Difficulty falling asleep", "Waking up frequently during the night", "Feeling tired upon waking"]
        },
        {
            name: "Insulin Resistance",
            symptoms: ["High blood sugar levels", "Increased thirst", "Fatigue"]
        },
        {
            name: "Interstitial Cystitis",
            symptoms: ["Pelvic pain", "Frequent urination", "Painful urination"]
        },
        {
            name: "Interstitial Nephritis",
            symptoms: ["Blood in urine", "Fever", "Nausea or vomiting"]
        },
        {
            name: "Intertrigo",
            symptoms: ["Red or raw skin", "Itching", "Burning sensation"]
        },
        {
            name: "Intoeing",
            symptoms: ["Feet pointing inward when walking", "Tripping or stumbling frequently", "Difficulty running"]
        },
        {
            name: "Intussusception",
            symptoms: ["Severe abdominal pain", "Bloody stool", "Vomiting"]
        },
        {
            name: "Irritable Bowel Syndrome (IBS)",
            symptoms: ["Abdominal pain or cramping", "Bloating", "Diarrhea or constipation"]
        },
        {
            name: "Jock Itch",
            symptoms: ["Itchy rash in the groin area", "Redness", "Flaking or peeling skin"]
        },
        {
            name: "Juvenile Rheumatoid Arthritis",
            symptoms: ["Joint pain", "Swelling", "Stiffness"]
        },
        {
            name: "Keloids (Raised Scars)",
            symptoms: ["Raised, shiny scars", "Red or purple in color", "Tender or itchy"]
        },
        {
            name: "Keratosis Pilaris",
            symptoms: ["Small, rough bumps on the skin", "Redness", "Dry, itchy skin"]
        },
        {
            name: "Kidney Cysts",
            symptoms: ["Back pain", "Abdominal pain", "High blood pressure"]
        },
        {
            name: "Kidney Infection Symptoms and Treatment",
            symptoms: ["Fever", "Back, side, or groin pain", "Frequent urination"]
        },
        {
            name: "Kidney Stones",
            symptoms: ["Severe pain in the side and back", "Painful urination", "Blood in urine"]
        },
        {
            name: "Labyrinthitis",
            symptoms: ["Dizziness", "Vertigo", "Nausea and vomiting"]
        },
        {
            name: "Lactose Intolerance",
            symptoms: ["Bloating", "Diarrhea", "Gas"]
        },
        {
            name: "Latex Allergy",
            symptoms: ["Skin rash", "Itching", "Sneezing"]
        },
        {
            name: "Leprosy",
            symptoms: ["Skin lesions", "Numbness or loss of sensation", "Muscle weakness"]
        },
        {
            name: "Leukemia",
            symptoms: ["Fatigue", "Fever", "Easy bruising or bleeding"]
        },
        {
            name: "Lichen Planus",
            symptoms: ["Itchy, flat-topped bumps", "Purple or reddish patches", "Shiny, smooth skin lesions"]
        },
        {
            name: "Lichen Sclerosus",
            symptoms: ["White, patchy skin", "Itching", "Painful sex"]
        },
        {
            name: "Lipomas",
            symptoms: ["Soft, doughy lumps under the skin", "Easily movable", "Usually painless"]
        },
        {
            name: "Long COVID",
            symptoms: ["Fatigue", "Shortness of breath", "Joint pain"]
        },
        {
            name: "Low Back Pain",
            symptoms: ["Dull, aching pain", "Muscle stiffness", "Difficulty standing or walking"]
        },
        {
            name: "Lumbar Spinal Canal Stenosis",
            symptoms: ["Leg pain", "Numbness or weakness in legs", "Difficulty walking"]
        },
        {
            name: "Lung Cancer",
            symptoms: ["Persistent cough", "Chest pain", "Shortness of breath"]
        },
        {
            name: "Lupus",
            symptoms: ["Fatigue", "Joint pain", "Skin rash"]
        },
        {
            name: "Lyme Disease",
            symptoms: ["Bullseye rash", "Fever", "Headache"]
        },
        {
            name: "Lymphedema",
            symptoms: ["Swelling in arms or legs", "Feeling of heaviness", "Restricted range of motion"]
        },
        {
            name: "Mad Cow Disease",
            symptoms: ["Rapidly progressing neurological symptoms", "Muscle stiffness", "Difficulty walking"]
        },
        {
            name: "Malaria",
            symptoms: ["Fever", "Chills", "Sweating"]
        },
          {
    name: "Male Breast Cancer",
    symptoms: ["Lump in the breast tissue", "Nipple discharge", "Changes in breast skin texture"]
  },
  {
    name: "Mallet Finger",
    symptoms: ["Inability to straighten the fingertip", "Pain and swelling at the fingertip", "Deformity of the fingertip"]
  },
  {
    name: "Mass Psychogenic Illness",
    symptoms: ["Symptoms without an identified cause", "Rapid onset and spread of symptoms within a group", "Symptoms often resolve spontaneously"]
  },
  {
    name: "Mastitis",
    symptoms: ["Breast pain", "Swelling", "Redness or warmth in the breast"]
  },
  {
    name: "Mastocytosis",
    symptoms: ["Skin lesions", "Flushing or itching", "Abdominal pain or cramping"]
  },
  {
    name: "Measles",
    symptoms: ["High fever", "Rash", "Cough"]
  },
  {
    name: "Meckel's Diverticulum",
    symptoms: ["Abdominal pain", "Bloody stool", "Vomiting"]
  },
  {
    name: "Meconium Aspiration Syndrome (MAS)",
    symptoms: ["Breathing difficulties", "Bluish skin color", "Rapid breathing"]
  },
  {
    name: "Melasma",
    symptoms: ["Dark patches on the skin", "Increased pigmentation", "Symmetrical patterns on the face"]
  },
  {
    name: "Meniere’s Disease",
    symptoms: ["Vertigo", "Hearing loss", "Tinnitus"]
  },
  {
    name: "Meningitis",
    symptoms: ["Headache", "Fever", "Stiff neck"]
  },
  {
    name: "Menopause",
    symptoms: ["Irregular periods", "Hot flashes", "Vaginal dryness"]
  },
  {
    name: "Metabolic Syndrome",
    symptoms: ["High blood pressure", "High blood sugar levels", "High cholesterol levels"]
  },
  {
    name: "Methicillin-resistant Staphylococcus aureus (MRSA)",
    symptoms: ["Skin infections", "Boils or abscesses", "Fever"]
  },
  {
    name: "Microscopic Hematuria",
    symptoms: ["Blood in urine that is only visible under a microscope", "No other symptoms present", "May indicate underlying kidney or bladder issues"]
  },
  {
    name: "Migraines",
    symptoms: ["Throbbing headache", "Sensitivity to light and sound", "Nausea"]
  },
  {
    name: "Mitral Valve Prolapse",
    symptoms: ["Heart palpitations", "Fatigue", "Dizziness or lightheadedness"]
  },
  {
    name: "Mononucleosis",
    symptoms: ["Fatigue", "Sore throat", "Swollen lymph nodes"]
  },
  {
    name: "Morning Sickness",
    symptoms: ["Nausea", "Vomiting", "Fatigue"]
  },
  {
    name: "Motion Sickness",
    symptoms: ["Nausea", "Vomiting", "Dizziness"]
  },
  {
    name: "Mpox (Monkeypox)",
    symptoms: ["Fever", "Rash", "Swelling of lymph nodes"]
  },
  {
    name: "Multiple Myeloma",
    symptoms: ["Bone pain", "Fatigue", "Frequent infections"]
  },
  {
    name: "Multiple Sclerosis",
    symptoms: ["Fatigue", "Numbness or weakness in limbs", "Difficulty walking"]
  },
  {
    name: "Mumps",
    symptoms: ["Swollen salivary glands", "Fever", "Headache"]
  },
  {
    name: "Munchausen Syndrome by Proxy",
    symptoms: ["Fabricating or inducing illness in another person", "Seeking attention or sympathy", "No obvious external gain"]
  },
  {
    name: "Muscular Dystrophy",
    symptoms: ["Muscle weakness", "Progressive deterioration of muscle tissue", "Difficulty walking"]
  },
  {
    name: "Nail Fungal Infections",
    symptoms: ["Thickened, discolored nails", "Brittle or crumbly nails", "Nail separation from the nail bed"]
  },
  {
    name: "Nasopharyngeal Cancer",
    symptoms: ["Nasal congestion", "Nosebleeds", "Hearing loss"]
  },
  {
    name: "Necrotizing Enterocolitis",
    symptoms: ["Bloated abdomen", "Bloody stools", "Feeding intolerance"]
  },
  {
    name: "Neonatal Abstinence Syndrome",
    symptoms: ["Tremors", "Irritability", "Poor feeding"]
  },
  {
    name: "Neural Tube Defects",
    symptoms: ["Spina bifida", "Anencephaly", "Encephalocele"]
  },
  {
    name: "Neurofibromatosis",
    symptoms: ["Skin lesions or bumps", "Nerve-related symptoms", "Scoliosis"]
  },
    {
    name: "Nightmares and Night Terrors",
    symptoms: ["Intense fear or terror during sleep", "Screaming or thrashing during sleep", "Difficulty waking from the episode"]
  },
  {
    name: "Non-Hodgkin Lymphoma",
    symptoms: ["Swollen lymph nodes", "Fever", "Unexplained weight loss"]
  },
  {
    name: "Non-substance Addiction",
    symptoms: ["Compulsive behavior without substance use", "Obsession with activities like gambling or gaming", "Continued behavior despite negative consequences"]
  },
  {
    name: "Nonalcoholic Fatty Liver Disease (Metabolic dysfunction-associated steatotic liver disease)",
    symptoms: ["Fatigue", "Enlarged liver", "Abdominal swelling or pain"]
  },
  {
    name: "Nosebleeds",
    symptoms: ["Bleeding from the nose", "Nasal congestion", "Dry air or nasal irritation"]
  },
  {
    name: "Obesity",
    symptoms: ["Excessive body weight", "Increased body fat percentage", "Difficulty with physical activity"]
  },
  {
    name: "Obsessive-Compulsive Disorder",
    symptoms: ["Obsessions (unwanted, intrusive thoughts)", "Compulsions (repetitive behaviors)", "Feelings of distress or anxiety if rituals are not performed"]
  },
  {
    name: "Occupational Respiratory Disease",
    symptoms: ["Coughing", "Wheezing", "Shortness of breath"]
  },
  {
    name: "Opioid Addiction",
    symptoms: ["Craving for opioids", "Loss of control over use", "Withdrawal symptoms when not using"]
  },
  {
    name: "Oppositional Defiant Disorder",
    symptoms: ["Argumentative behavior", "Defiance or refusal to comply with rules or requests", "Angry outbursts"]
  },
  {
    name: "Organic Acid Metabolism Disorders",
    symptoms: ["Vomiting", "Lethargy", "Poor feeding"]
  },
  {
    name: "Osgood-Schlatter Disease",
    symptoms: ["Knee pain", "Swelling just below the knee", "Tenderness over the tibial tubercle"]
  },
  {
    name: "Osteoarthritis",
    symptoms: ["Joint pain", "Stiffness", "Decreased range of motion"]
  },
  {
    name: "Osteochondritis Dissecans",
    symptoms: ["Joint pain", "Swelling", "Decreased range of motion"]
  },
  {
    name: "Osteopenia",
    symptoms: ["Bone density lower than normal", "Increased risk of fractures", "Bone pain"]
  },
  {
    name: "Osteoporosis",
    symptoms: ["Decreased bone density", "Increased risk of fractures", "Bone pain"]
  },
  {
    name: "Osteosarcoma",
    symptoms: ["Bone pain", "Swelling near a bone", "Bone fracture"]
  },
  {
    name: "Otitis Externa (Swimmer's Ear)",
    symptoms: ["Ear pain", "Swelling", "Drainage from the ear"]
  },
  {
    name: "Otitis Media (with Effusion)",
    symptoms: ["Ear pressure or fullness", "Hearing loss", "Fluid drainage from the ear"]
  },
  {
    name: "Ovarian Cancer",
    symptoms: ["Abdominal bloating or swelling", "Pelvic pain", "Changes in bowel habits"]
  },
  {
    name: "Ovarian Cyst",
    symptoms: ["Abdominal or pelvic pain", "Bloating", "Pain during intercourse"]
  },
  {
    name: "Overactive Bladder",
    symptoms: ["Frequent or urgent need to urinate", "Incontinence", "Nocturia (waking up to urinate at night)"]
  },
  {
    name: "Pancreatic Cancer",
    symptoms: ["Abdominal pain", "Unintended weight loss", "Jaundice"]
  },
  {
    name: "Pancreatitis",
    symptoms: ["Abdominal pain", "Nausea", "Vomiting"]
  },
  {
    name: "Panic Disorder and Panic Attacks",
    symptoms: ["Sudden feelings of terror", "Rapid heartbeat", "Sweating or trembling"]
  },
  {
    name: "Paraphimosis",
    symptoms: ["Painful, swollen penis", "Inability to retract the foreskin", "Discoloration of the glans penis"]
  },
  {
    name: "Parkinson’s Disease",
    symptoms: ["Tremors", "Bradykinesia (slowed movement)", "Muscle stiffness"]
  },
  {
    name: "Paronychia",
    symptoms: ["Redness and swelling around the nail", "Pain", "Pus-filled blisters"]
  },
  {
    name: "Patellofemoral Pain Syndrome",
    symptoms: ["Knee pain", "Pain worsens with activities like climbing stairs or kneeling", "Swelling around the knee"]
  },
  {
    name: "Pelvic Floor Disorders",
    symptoms: ["Urinary or fecal incontinence", "Pelvic organ prolapse", "Pelvic pain"]
  },
  {
    name: "Pelvic Inflammatory Disease",
    symptoms: ["Pelvic pain", "Fever", "Vaginal discharge"]
  },
  {
    name: "Peptic Ulcer Disease",
    symptoms: ["Abdominal pain", "Nausea", "Bloating"]
  },
  {
    name: "Perimenopause",
    symptoms: ["Irregular periods", "Hot flashes", "Mood swings"]
  },
  {
    name: "Peripheral Arterial Disease and Claudication",
    symptoms: ["Leg pain when walking", "Leg numbness or weakness", "Coldness or discoloration of the leg or foot"]
  },
  {
    name: "Peritonsillar Abscess",
    symptoms: ["Sore throat", "Difficulty swallowing", "Swelling of the tonsils"]
  },
  {
    name: "Persistent Depressive Disorder (PDD)",
    symptoms: ["Persistent feelings of sadness", "Loss of interest or pleasure in activities", "Changes in appetite or sleep"]
  },
  {
    name: "Peyronie’s Disease",
    symptoms: ["Curved penis", "Pain during erections", "Difficulty with erections"]
  },
  {
    name: "Phenylketonuria (PKU)",
    symptoms: ["Intellectual disability", "Behavioral problems", "Seizures"]
  },
  {
    name: "Pica",
    symptoms: ["Craving and consumption of non-food items", "Eating dirt, paper, soap, or chalk", "Risk of lead poisoning or intestinal blockage"]
  },

  {
    name: "Pigmented Villonodular Synovitis",
    symptoms: ["Joint swelling", "Joint pain", "Limited range of motion"]
  },
  {
    name: "Pilonidal Cyst",
    symptoms: ["Painful lump near the tailbone", "Swelling", "Drainage of pus or blood"]
  },
  {
    name: "Pinworm Infection",
    symptoms: ["Itching around the anus", "Restless sleep", "Visible worms in stool or around the anus"]
  },
  {
    name: "Piriformis Syndrome",
    symptoms: ["Pain in the buttocks", "Pain that radiates down the leg", "Difficulty sitting or walking"]
  },
  {
    name: "Pituitary Tumors",
    symptoms: ["Headaches", "Vision problems", "Hormonal imbalances"]
  },
  {
    name: "Pityriasis Rosea",
    symptoms: ["Pink or red oval rash", "Itching", "Fatigue"]
  },
  {
    name: "Plagiocephaly",
    symptoms: ["Flattening of the head", "Uneven head shape", "Facial asymmetry"]
  },
  {
    name: "Plantar Fasciitis",
    symptoms: ["Heel pain", "Pain in the arch of the foot", "Stiffness in the morning"]
  },
  {
    name: "Pleurisy (Pleuritis)",
    symptoms: ["Chest pain", "Pain when breathing deeply", "Shortness of breath"]
  },
  {
    name: "Pneumonia and Walking Pneumonia",
    symptoms: ["Cough", "Fever", "Difficulty breathing"]
  },
  {
    name: "Poison Ivy",
    symptoms: ["Redness", "Itching", "Blisters"]
  },
  {
    name: "Poisoning",
    symptoms: ["Nausea", "Vomiting", "Dizziness"]
  },
  {
    name: "Polycystic Kidney Disease",
    symptoms: ["High blood pressure", "Back or side pain", "Frequent urination"]
  },
  {
    name: "Polycystic Ovary Syndrome",
    symptoms: ["Irregular periods", "Excess hair growth", "Acne"]
  },
  {
    name: "Polycythemia Vera",
    symptoms: ["Headaches", "Dizziness", "Enlarged spleen"]
  },
  {
    name: "Polyps",
    symptoms: ["No symptoms in many cases", "Rectal bleeding", "Change in bowel habits"]
  },
  {
    name: "Post-Traumatic Stress Disorder (PTSD)",
    symptoms: ["Flashbacks", "Nightmares", "Avoidance of triggers"]
  },
  {
    name: "Postpartum Depression (PPD)",
    symptoms: ["Sadness", "Anxiety", "Fatigue"]
  },
  {
    name: "Postpartum Preeclampsia",
    symptoms: ["High blood pressure", "Excess protein in urine", "Swelling"]
  },
  {
    name: "Prediabetes",
    symptoms: ["Increased thirst", "Fatigue", "Blurry vision"]
  },
  {
    name: "Preeclampsia",
    symptoms: ["High blood pressure", "Swelling", "Protein in urine"]
  },
  {
    name: "Premature Ejaculation",
    symptoms: ["Ejaculation that occurs too quickly", "Distress or frustration about ejaculation timing"]
  },
  {
    name: "Premenstrual Dysphoric Disorder",
    symptoms: ["Severe mood swings", "Irritability", "Depression"]
  },
  {
    name: "Premenstrual Syndrome (PMS)",
    symptoms: ["Mood swings", "Breast tenderness", "Bloating"]
  },
  {
    name: "Prescription Drug Abuse in the Elderly",
    symptoms: ["Changes in sleep patterns", "Memory problems", "Unexplained injuries"]
  },
  {
    name: "Pressure Sores",
    symptoms: ["Red, inflamed skin", "Pain or itching", "Open wounds"]
  },
  {
    name: "Prostate Cancer",
    symptoms: ["Frequent urination", "Difficulty urinating", "Blood in urine or semen"]
  },
  {
    name: "Prostatitis",
    symptoms: ["Painful or difficult urination", "Pelvic pain", "Painful ejaculation"]
  },
  {
    name: "Pruritus (Itchy Skin)",
    symptoms: ["Itching", "Redness", "Dry skin"]
  },
  {
    name: "Pseudogout",
    symptoms: ["Joint pain", "Swelling", "Redness"]
  },
  {
    name: "Psoriasis",
    symptoms: ["Red patches of skin", "Silvery scales", "Itching or burning"]
  },
  {
    name: "Pulmonary Hypertension",
    symptoms: ["Shortness of breath", "Fatigue", "Chest pain"]
  },
  {
    name: "Pyloric Stenosis",
    symptoms: ["Forceful vomiting", "Dehydration", "Weight loss"]
  },

  {
    name: "Speech and Language Delay",
    symptoms: ["Limited vocabulary for age", "Difficulty forming sentences", "Difficulty understanding language"]
  },
  {
    name: "Spina Bifida",
    symptoms: ["Visible spinal defect at birth", "Muscle weakness or paralysis", "Bowel or bladder problems"]
  },
  {
    name: "Spinal Cord Injury",
    symptoms: ["Paralysis", "Loss of sensation", "Loss of bowel or bladder control"]
  },
  {
    name: "Squamous Cell Carcinoma",
    symptoms: ["Red, scaly patches", "Persistent sores", "Wart-like growths"]
  },
  {
    name: "Stomach Cancer",
    symptoms: ["Abdominal pain or discomfort", "Unintentional weight loss", "Loss of appetite"]
  },
  {
    name: "Stomach Flu (Gastroenteritis)",
    symptoms: ["Nausea", "Vomiting", "Diarrhea"]
  },
  {
    name: "Strabismus",
    symptoms: ["Misaligned eyes", "Double vision", "Eye strain or discomfort"]
  },
  {
    name: "Strep Throat",
    symptoms: ["Sore throat", "Difficulty swallowing", "Fever"]
  },
  {
    name: "Stroke",
    symptoms: ["Sudden numbness or weakness", "Confusion", "Difficulty speaking or understanding speech"]
  },
  {
    name: "Stuttering",
    symptoms: ["Repeating sounds or words", "Prolonging sounds", "Blocks or pauses in speech"]
  },
  {
    name: "Sty",
    symptoms: ["Red, painful lump on eyelid", "Swelling", "Tenderness"]
  },
  {
    name: "Substance Use Disorder",
    symptoms: ["Loss of control over substance use", "Cravings", "Social or interpersonal problems"]
  },
  {
    name: "Sudden Infant Death Syndrome (SIDS)",
    symptoms: ["Unexplained death of an infant", "Usually occurs during sleep", "No signs of struggle"]
  },
  {
    name: "Syphilis",
    symptoms: ["Painless sores", "Rash", "Flu-like symptoms"]
  },
  {
    name: "Teeth Grinding (Bruxism)",
    symptoms: ["Grinding or clenching teeth", "Jaw pain", "Headache"]
  },
  {
    name: "Tennis Elbow",
    symptoms: ["Pain or burning on outer part of elbow", "Weak grip", "Difficulty with wrist movements"]
  },
  {
    name: "Testicular Cancer",
    symptoms: ["Lump or swelling in testicle", "Pain or discomfort", "Heaviness in scrotum"]
  },
  {
    name: "Testicular Torsion",
    symptoms: ["Sudden, severe pain in testicle", "Swelling", "Nausea or vomiting"]
  },
  {
    name: "Thalassemia",
    symptoms: ["Fatigue", "Weakness", "Pale skin"]
  },
  {
    name: "Thrush",
    symptoms: ["White patches in mouth", "Sore throat", "Difficulty swallowing"]
  },
  {
    name: "Thyroid Nodules",
    symptoms: ["Lump in the neck", "Difficulty swallowing", "Hoarseness"]
  },
  {
    name: "Thyroiditis",
    symptoms: ["Neck pain", "Fatigue", "Weight gain or loss"]
  },
  {
    name: "Tick-Borne Relapsing Fever",
    symptoms: ["Recurring fever", "Headache", "Muscle and joint aches"]
  },
  {
    name: "Tinnitus",
    symptoms: ["Ringing, buzzing, or roaring in the ears", "Hearing loss", "Headache"]
  },
  {
    name: "Tobacco Addiction",
    symptoms: ["Strong urge to smoke", "Difficulty quitting", "Withdrawal symptoms"]
  },
  {
    name: "Tonsillitis",
    symptoms: ["Sore throat", "Swollen tonsils", "Difficulty swallowing"]
  },
  {
    name: "Tourette Syndrome and Tics",
    symptoms: ["Uncontrollable movements or sounds", "Repetitive behaviors", "Tics"]
  },
  {
    name: "Toxic Shock Syndrome",
    symptoms: ["High fever", "Rash", "Low blood pressure"]
  },
  {
    name: "Toxic Synovitis, or Transient Synovitis of the Hip",
    symptoms: ["Hip pain", "Limping", "Fever"]
  },
  {
    name: "Toxoplasmosis",
    symptoms: ["Flu-like symptoms", "Muscle aches", "Swollen lymph nodes"]
  },
  {
    name: "Traumatic Brain Injury",
    symptoms: ["Headache", "Dizziness", "Memory problems"]
  },
  {
    name: "Traveler’s Diarrhea",
    symptoms: ["Diarrhea", "Abdominal cramps", "Nausea"]
  },
  {
    name: "Trigeminal Neuralgia",
    symptoms: ["Severe facial pain", "Episodes of pain triggered by touch or movement", "Painful spasms"]
  },
  {
    name: "Tuberculosis",
    symptoms: ["Cough", "Weight loss", "Fever"]
  },
  {
    name: "Tuberous Sclerosis",
    symptoms: ["Skin abnormalities", "Seizures", "Intellectual disability"]
  },
  {
    name: "Ulcers - Stomach Ulcer Symptoms",
    symptoms: ["Burning stomach pain", "Heartburn", "Nausea"]
  },
  {
    name: "Undescended Testicles",
    symptoms: ["One or both testicles not descended into the scrotum", "Inguinal hernia", "Infertility"]
  },
  {
    name: "Urinary Incontinence",
    symptoms: ["Leakage of urine", "Strong sudden urge to urinate", "Frequent urination"]
  },
  {
    name: "Uterine Fibroids",
    symptoms: ["Heavy menstrual bleeding", "Pelvic pain", "Frequent urination"]
  },
  {
    name: "Urinary Tract Infection",
    symptoms: ["Frequent urination", "Burning sensation when urinating", "Cloudy or bloody urine"]
  },
  {
    name: "Vaginitis",
    symptoms: ["Vaginal itching", "Abnormal vaginal discharge", "Pain during intercourse"]
  },
  {
    name: "Varicose Veins",
    symptoms: ["Veins that appear swollen or twisted", "Aching pain in the legs", "Burning or throbbing in the legs"]
  },
  {
    name: "Vibrio Vulnificus Infection",
    symptoms: ["Fever", "Chills", "Nausea and vomiting"]
  },
  {
    name: "Vision Loss",
    symptoms: ["Blurred vision", "Partial or total vision loss", "Floaters or flashes of light"]
  },
  {
    name: "Vitiligo",
    symptoms: ["Loss of skin color", "Patches of skin that become lighter", "Premature whitening or graying of hair"]
  },
  {
    name: "Vomiting and Diarrhea",
    symptoms: ["Nausea", "Vomiting", "Watery or loose stools"]
  },
  {
    name: "Vulvar Cancer",
    symptoms: ["Itching, burning, or bleeding on the vulva", "Pain or tenderness", "Lump or mass on the vulva"]
  },
  {
    name: "Vulvodynia",
    symptoms: ["Chronic vulvar pain", "Burning, stinging, or irritation", "Pain during intercourse"]
  },
  {
    name: "Warts and Wart Removal",
    symptoms: ["Flesh-colored, raised bumps", "Small, fleshy growths", "Itching or discomfort"]
  },
  {
    name: "West Nile Virus",
    symptoms: ["Fever", "Headache", "Body aches"]
  },
  {
    name: "Whooping Cough",
    symptoms: ["Severe coughing fits", "High-pitched whoop sound when inhaling", "Vomiting after coughing fits"]
  },
  {
    name: "Wolff-Parkinson-White Syndrome",
    symptoms: ["Rapid or irregular heartbeat", "Chest pain", "Dizziness or lightheadedness"]
  },
  {
    name: "Yeast Infections",
    symptoms: ["Itching", "Burning", "Abnormal vaginal discharge"]
  },
  {
    name: "Zika",
    symptoms: ["Fever", "Rash", "Joint pain"]
  }

]
