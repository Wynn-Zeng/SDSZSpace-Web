import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import WriteIcon from "../assets/WriteIcon";

function WriteBox() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <div style={{position: "absolute", bottom: "50px", right: "75px"}}>
                <Button isIconOnly color="primary" style={{width: "50px", height: "50px", padding: "10px", borderRadius: "50%"}} onPress={onOpen}>
                    <WriteIcon />
                </Button>
            </div>
            <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 dark:text-white">发布一条帖子</ModalHeader>
                    <ModalBody className="dark:text-white">
                        <>
                            <p>富文本编辑器正在开发中，预计支持Markdown</p>
                        </>
                    </ModalBody>
                    <ModalFooter>
                        <><Button color="primary" onPress={onClose}>发布</Button></>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default WriteBox;