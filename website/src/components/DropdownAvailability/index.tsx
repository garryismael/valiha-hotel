import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaMinus, FaPlus, FaUser } from "react-icons/fa6";

const DropdownAvailability = () => {
  return (
    <Dropdown closeOnSelect={false}>
      <DropdownTrigger>
        <Button
          variant="flat"
          className="flex items-center px-2 py-10 w-full outline-none !bg-transparent !text-dark-muted-300 text-xl ml-2"
        >
          <FaUser size={24} />
          <div>
            <p>1</p>
            <p>Adulte(s)</p>
          </div>
          <div>
            <p>1</p>
            <p>Enfants(s)</p>
          </div>
          <div>
            <p>1</p>
            <p>Chambre(s)</p>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="adult" className="hover:!bg-transparent">
          <div className="flex items-center justify-between gap-4">
            <span>Adulte(s)</span>
            <div className="flex items-center gap-3">
              <Button isIconOnly color="default" radius="full" size="sm" className="!text-dark-muted-300">
                <FaMinus size={16} />
              </Button>
              <span>1</span>
              <Button isIconOnly color="default" radius="full" size="sm" className="!text-dark-muted-300">
                <FaPlus size={16} />
              </Button>
            </div>
          </div>
        </DropdownItem>
        <DropdownItem key="kid" className="hover:!bg-transparent">
          <div className="flex items-center justify-between gap-4">
            <span>Enfant(s)</span>
            <div className="flex items-center gap-3">
              <Button isIconOnly color="default" radius="full" size="sm" className="!text-dark-muted-300">
                <FaMinus size={16} />
              </Button>
              <span>1</span>
              <Button isIconOnly color="default" radius="full" size="sm" className="!text-dark-muted-300">
                <FaPlus size={16} />
              </Button>
            </div>
          </div>
        </DropdownItem>
        <DropdownItem key="room" className="hover:!bg-transparent">
          <div className="flex items-center justify-between gap-4">
            <span>Chambre(s)</span>
            <div className="flex items-center gap-3">
              <Button isIconOnly color="default" radius="full" size="sm" className="!text-dark-muted-300">
                <FaMinus size={16} />
              </Button>
              <span>1</span>
              <Button isIconOnly color="default" radius="full" size="sm" className="!text-dark-muted-300">
                <FaPlus size={16} />
              </Button>
            </div>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownAvailability;
