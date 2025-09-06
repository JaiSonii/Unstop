const Divider = () => {
    return (
        <div className="flex items-center gap-4 w-full">
            <div className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500 text-sm font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300" />
        </div>
    );
};

export default Divider