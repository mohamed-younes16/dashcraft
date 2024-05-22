type InfographicItem = {
  icon: string;
  title: string;
  text: string;
};

type InfographicDataEmpty = {
  class: "timeline";
  data: null;
};

type InfographicDataFilled = {
  class: "data";
  data: InfographicItem[];
};

type InfographicData = InfographicDataFilled | InfographicDataEmpty;
