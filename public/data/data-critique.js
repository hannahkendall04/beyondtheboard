export const dataCritiques = [
    {
        "title": "Dataset Critique",
        "description": "Examination and analysis of the primary datasets (sources) we used for our project",
        "critique": []
    },
    {
        "title": "Student Dropout & Success Prediction",
        "description": "",
        "critique": [
            "We obtained the Student Dropout & Success Prediction dataset from Kaggle, which was sourced from a Portuguese higher education institution that combined data from several disjoint datasets. The authors thoroughly cleaned the original dataset to handle missing values and anomalies. The original, cleaned dataset is publicly available through UCI’s Machine Learning Repository, and no further data transformations were done before being uploaded to Kaggle. The dataset was funded/supported by a grant from the SATDAP - Capacitação da Administração Pública program, and was collected to support educational policy-making.",
            "The Student Dropout & Success Prediction dataset has 4,424 instances (rows) and 36 features (columns). Each instance represents an undergraduate student. The primary goal of the dataset is to use the demographic, socioeconomic, and academic information of students to predict whether a student will drop out, remain enrolled, or successfully graduate. In our project, we plan to examine how different student characteristics and institutional supports affect academic success to inform initiatives aimed at reducing student dropout rates. This dataset contains a variety of features that may be useful in our research, including demographic and socioeconomic information such as gender, age, nationality, and parental education and occupation, academic history, including degree program and admission grades, and student status, a categorical feature taking one of three values: Dropout, Enrolled, or Graduate. This information can be used to reveal patterns of how student characteristics and institutional support influence student success in an undergraduate setting.",
            "Although this dataset provides useful information for identifying factors that influence student academic success, it is not comprehensive. Because the dataset is composed of undergraduate students, we can not confidently generalize any patterns found in the dataset to K-12 or graduate students, nor can we learn about factors/patterns that lead to undergraduate enrollment/acceptance in the first place. Additionally, there is no additional information for students who dropped out, explaining why they did not graduate. If this were the only data source, the Student Dropout & Success Prediction dataset would frame student success and dropout mainly through measurable demographic and academic variables, leaving out students’ lived experiences and broader structural factors such as financial hardship, institutional support, and discrimination."
        ]
    },
    {
        "title": "",
        "description": "",
        "critique": []
    }
]