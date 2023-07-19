type Props = {
  label: string;
  eventClick: () => void;
};

export const CustomButton = ({ label, eventClick }: Props) => {
  return (
    <button
      className="p-3 text-white bg-blue-500 rounded-md mr-2"
      onClick={eventClick}
    >
      {label}
    </button>
  );
};
