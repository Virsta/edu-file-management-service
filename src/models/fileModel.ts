import mongoose, { Schema, Document } from 'mongoose';

export interface File extends Document {
    fileId: string;
    userId: string;
    filePath: string;
    fileName: string;
}

const FileSchema: Schema = new Schema({
    fileId: { type: String, required: true },
    userId: { type: String, required: true },
    filePath: { type: String, required: true },
    fileName: { type: String, required: true },
});

export default mongoose.model<File>('File', FileSchema);
