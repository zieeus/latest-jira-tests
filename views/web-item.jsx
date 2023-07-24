// import React, {Fragment} from 'react';
//
// import Button from '@atlaskit/button/standard-button';
// import Select, {
//     components
// } from '@atlaskit/select';
// import { token } from '@atlaskit/tokens';
//
//
// import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form';
//
//
//
// const colors = [
//     { label: 'Blue', value: 'blue' },
//     { label: 'Red', value: 'red' },
//     { label: 'Purple', value: 'purple' },
//     { label: 'Black', value: 'black' },
//     { label: 'White', value: 'white' },
//     { label: 'Gray', value: 'gray' },
//     { label: 'Yellow', value: 'yellow' },
// ];
//
// const flavors = [
//     { label: 'Vanilla', value: 'vanilla' },
//     { label: 'Strawberry', value: 'strawberry' },
//     { label: 'Chocolate', value: 'chocolate' },
//     { label: 'Mango', value: 'mango' },
//     { label: 'Passionfruit', value: 'passionfruit' },
//     { label: 'Hazelnut', value: 'hazelnut' },
//     { label: 'Durian', value: 'durian' },
// ];
//
// const ColorBox = ({ color }) => (
//     <span
//         style={{
//             width: '10px',
//             height: '10px',
//             backgroundColor: color,
//             display: 'inline-block',
//             marginRight: token('space.100', '8px'),
//             marginBottom: token('space.050', '4px'),
//             verticalAlign: 'middle',
//         }}
//     />
// );
//
//
// /**
//  * NOTE: this is not declared inline with the Select
//  * If you declare inline you'll have issues with refs
//  */
// const CustomColorOption = ({
//                                children,
//                                ...props
//                            }) => (
//     // eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
//     <components.Option {...props}>
//         <ColorBox color={children} /> {children}
//     </components.Option>
// );
//
// /**
//  * NOT: this is not declared inline with the Select
//  * If you declare inline you'll have issues with refs
//  */
// const CustomValueOption = ({
//                                children,
//                                ...props
//                            }) => (
//     // eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
//     <components.SingleValue {...props}>
//         <ColorBox color={children} /> {children}
//     </components.SingleValue>
// );
//
// const FormCustomSelectFieldExample = () => {
//
//
//     return (
//             <Form
//                 onSubmit={(data) => {
//                 console.log('form data', data);
//             }}
//                 >
//                 {({ formProps }) => (
//                     <form {...formProps}>
//                         <Field name="colors" label="Select a color">
//                             {({ fieldProps: { id, ...rest }, error }) => (
//                                 <Fragment>
//                                     <Select
//                                         inputId={id}
//                                         components={{
//                                         Option: CustomColorOption,
//                                         SingleValue: CustomValueOption,
//                                     }}
//                                         {...rest}
//                                         options={colors}
//                                         isClearable
//                                         />
//                                         {error && <ErrorMessage>{error}</ErrorMessage>}
//                                 </Fragment>
//                                 )}
//                     </Field>
//                     <Field
//                     name="icecream"
//                     label="Select a flavor"
//                     defaultValue={[]}
//                     >
//                 {({ fieldProps: { id, ...rest }, error }) => (
//                     <Fragment>
//                     <Select inputId={id} {...rest} options={flavors} isMulti />
//                 {error && <ErrorMessage>{error}</ErrorMessage>}
//         </Fragment>
//     )}
// </Field>
// </form>
// )}
// </Form>
// );
// };
//
// export default FormCustomSelectFieldExample;
//
// // export default function App () {
// //     return (
// //         <>HHHHH</>
// //     );
// // }

// import React from 'react';
//
// import Button from '@atlaskit/button';
//
// const ButtonDefaultExample = () => {
//     return (
//         <>
//             <script src="https://connect-cdn.atl-paas.net/all.js" type="text/javascript"></script>
//             <Button onClick={AP.dialog.create({
//                 key: 'dialog-example'
//             })}>Default button</Button>
//         </>
//
//     );
// };
//
// export default ButtonDefaultExample;

import React, {Fragment, useCallback, useEffect, useState} from 'react';

import Button from '@atlaskit/button/standard-button';
import { Field, HelperMessage } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';

import Modal, {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTransition,
} from '@atlaskit/modal-dialog';

export default function Example() {
    const [isOpen, setIsOpen] = useState(true);
    const [name, setName] = useState('');

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => {
        setIsOpen(false)
        AP.dialog.close()},
        []);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            const obj= {};
            data.forEach((val, key) => {
                obj[key] = val;
            });

            setName(obj.name);
        },
        [setName],
    );

    const callback = () => {
        console.log('AAAALLLLRRRRREEEEAAAADDDDDYYYYY')
    };

    const startAllJS = (callback) => {
        const ConnectCdn = document.getElementById("connect-cdn");

        if (!ConnectCdn) {
            const script = document.createElement("script");
            script.src = "https://connect-cdn.atl-paas.net/all.js";
            script.id = "connect-cdn";
            document.body.appendChild(script);
            script.onload = () => callback();
            script.onerror = () => {
                throw new Error(
                    "Atlassian Javascript API (AP) is not available, please verify if you have added a reference to `all.js`"
                );
            };
        } else callback();
        // AP.events.on('dialog.submit', function (data) {
        //     if (data.button.name === 'submit') {
        //         console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW')
        //         console.log(data.target.value)
        //     }
        //     else {
        //         // Do something else
        //         console.log('LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL')
        //     }
        // })

    };
    useEffect(()=>{
        // startAllJS(callback);
    },[])

    return (
        <>
            {/*<Button appearance="primary" onClick={openModal}>*/}
            {/*    Open modal*/}
            {/*</Button>*/}
            {

            }


            <ModalTransition style={{backgroundColor:'red'}}>
                {isOpen && (
                    <Modal onClose={closeModal}>
                        <form onSubmit={onSubmit}>
                            <ModalHeader>
                                <ModalTitle>Create a user</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <Field id="name" name="name" label="Type your name to continue">
                                    {({ fieldProps }) => (
                                        <Fragment>
                                            <Textfield
                                                {...fieldProps}
                                                defaultValue="Ian Atlas"
                                                value={undefined}
                                            />
                                            <HelperMessage >
                                                {name ? `Hello, ${name}` : ''}
                                            </HelperMessage>
                                        </Fragment>
                                    )}
                                </Field>
                            </ModalBody>
                            <ModalFooter>
                                <Button appearance="subtle" onClick={closeModal}>
                                    Close
                                </Button>
                                <Button appearance="primary" type="submit">
                                    Create
                                </Button>
                            </ModalFooter>
                        </form>
                    </Modal>
                )}
            </ModalTransition>
        </>
    );
}