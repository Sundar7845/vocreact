import { Head } from '@inertiajs/react';
import MultiStepForm from '../components/MultiStepForm';

const welcome = () => {
    return (
        <>
            <Head>
                <title>VOC Feedback Form</title>
            </Head>
            <div>
                <MultiStepForm />
            </div>
        </>
    );
};

export default welcome;
