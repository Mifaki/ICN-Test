import { useEffect, useState } from "react";

type NotificationProps = {
    message: string;
    onClose: () => void;
};

const Notification = ({
    message,
    onClose
}: NotificationProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return visible ? (
        <div className="fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-6 bg-gray-500 rounded-full px-3 py-2 text-white destkop-caption">
            <p>{message}</p>
        </div>
    ) : null;
};

export default Notification