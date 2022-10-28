import { IdeaForms } from "./IdeaForms/IdeaForms.component";
import { MyIdea } from "./MyIdea/MyIdea.component";

export const Idea = () => {
    const isCreator = true;

    return isCreator ? <MyIdea /> : <IdeaForms />;
}