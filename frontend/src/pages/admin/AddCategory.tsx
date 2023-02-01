import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "../../components/global/Button";
import Container from "../../components/global/Container";
import Input from "../../components/global/Input";
import Textarea from "../../components/global/Textarea";
import Title from "../../components/global/Title";
import { ERR_MSG } from "../../constants/common";
import { CATEGORY_ENDPOINT } from "../../constants/routes";
import { addNewCategory } from "../../redux/features/categories/categorySlice";
import axios from "../../utils/axiosInstance";
type ErrorProps = { catName: string; description: string };
const AddCategory = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState({
        catName: "",
        description: "",
    });
    const [catName, setCatName] = useState("");
    const [description, setDescription] = useState("");

    const handleValidateForm = () => {
        let errors = {} as ErrorProps;
        if (!catName) {
            errors.catName = "Title is required!";
        } else if (catName.length < 5 || catName.length > 50) {
            errors.catName =
                "Title size must be min 5 chars and max is 150 chars";
        }
        if (!description) {
            errors.description = "Description is required!";
        } else if (description.length < 5 || description.length > 50) {
            errors.description =
                "Description size must be min 5 chars and max is 50 chars";
        }

        return errors;
    };

    const handleAddCategory = async () => {
        const getValidFormData = handleValidateForm();
        setFormError(getValidFormData);
        if (Object.keys(getValidFormData).length === 0) {
            try {
                setLoading(true);
                let res = await (
                    await axios.post(
                        CATEGORY_ENDPOINT,
                        JSON.stringify({
                            categoryTitle: catName.replaceAll(" ", "_"),
                            categoryDescription: description,
                        })
                    )
                ).data;

                dispatch(addNewCategory(res));
                setLoading(false);
                toast.success("Category Added!");
                setCatName("");
                setDescription("");
            } catch (error: any) {
                toast.error(
                    typeof error === "string"
                        ? error
                        : error?.message
                        ? error?.message
                        : ERR_MSG
                );
            }
        }
    };

    return (
        <Container>
            <div className="pt-24 lg:w-3/5 mx-auto">
                <Title title="Add Category" />
                <div>
                    <form>
                        <div>
                            <Input
                                onChange={(e) => setCatName(e.target.value)}
                                message={formError.catName}
                                label="Name"
                                name="name"
                                placeholder="Enter Category Name"
                                value={catName}
                            />
                            <Textarea
                                onChange={(e) => setDescription(e.target.value)}
                                message={formError.description}
                                label="Description"
                                name="description"
                                placeholder="Enter description"
                                value={description}
                            />
                        </div>

                        <Button
                            title="Add a category"
                            onClick={handleAddCategory}
                            disabled={loading}
                            loading={loading}
                        />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default AddCategory;
