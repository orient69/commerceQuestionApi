import mongoose from 'mongoose';

export interface IData {
    semester?: string;
    subjectData?: {
        subjectName?: string;
        questionBank?: [
            {
                question?: string;
                answer?: string;
            },
        ];
    };
}
// SCHEMA
const AnswerSchema = new mongoose.Schema({
    introduction: {
        type: String,
        required: true,
    },

    features: [String],
    kinds: [String],
    conclusion: {
        type: String,
        required: true,
    },
});

const SubjectSchema = new mongoose.Schema({
    subjectName: { type: String, required: true },
    questionBank: [
        {
            question: { type: String, required: true },
            answer: AnswerSchema,
        },
    ],
});

const SemesterSchema = new mongoose.Schema<IData>({
    semester: {
        type: String,
        required: true,
    },
    subjectData: SubjectSchema,
});

const semesterData = mongoose.model('SemesterData', SemesterSchema);

export default semesterData;
