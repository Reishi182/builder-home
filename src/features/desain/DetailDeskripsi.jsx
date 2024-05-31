import { useSearchParams } from "react-router-dom";
import ButtonTab from "../../components/ButtonTab";

export default function DetailDeskripsi() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setTab(value) {
    searchParams.set("tab", value);
    setSearchParams(searchParams);
  }
  const list = [
    { value: "konsep", label: "Konsep" },
    { value: "denah", label: "Denah" },
    { value: "spesifikasi", label: "Spesifikasi" },
  ];
  const currentTab = searchParams.get("tab") || list.at(0).value;

  return (
    <>
      <h1 className="block text-3xl font-semibold text-[#C0702E]">
        Detail Deskripsi
      </h1>
      <div className="flex items-center space-x-5">
        {list.map((item, i) => (
          <ButtonTab
            active={item.value === currentTab}
            onClick={() => setTab(item.value)}
            key={i}
          >
            {item.label}
          </ButtonTab>
        ))}
      </div>
    </>
  );
}
