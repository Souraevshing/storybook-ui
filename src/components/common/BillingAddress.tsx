import { useState } from "react";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../styles/components/billingaddress.scss";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type CountryList = {
  id: number;
  country_name: string;
  country_code: string;
  name: string[];
};

type ProvinceList = {
  id: number;
  name: string;
  country_id?: number;
  country_code: string;
  country_name: string;
  state_code: string;
  type?: string;
  latitude?: number;
  longitude?: number;
};

type AddressProps = {
  addressLineLabel: string;
  onChange: (e: any) => void;
  addressLinePlaceholder: string;
  postalcodePlaceholder: string;
  cityPlaceholder: string;
  countriesLists: CountryList[];
  provinceLists: ProvinceList[];
};

function AddressBar({
  postalcodePlaceholder,
  addressLineLabel,
  addressLinePlaceholder,
  cityPlaceholder,
  countriesLists,
  provinceLists,
  onChange,
}: AddressProps) {
  const [cityTextError, setCityTextError] = useState("");
  const [postalError, setPostalError] = useState("");
  const [countryValue, setCountryValue] = useState<any>({});
  const [provinceValue, setProvinceValue] = useState<any>({});
  const [countryList, setCountryList] = useState(countriesLists);
  const [provinceList, setProvinceList] = useState(provinceLists);

  const cityFieldHandler = (e: any) => {
    const { value } = e.target;
    if (!value?.length) {
      return setCityTextError("City not found");
    } else {
      if (value?.length <= 3) {
        return setCityTextError("Invalid City");
      }
      return setCityTextError("");
    }
  };

  const postalFieldHandler = (e: any) => {
    const { value } = e.target;
    if (!value?.length) {
      setPostalError("Postal not found");
    } else {
      if (value?.length <= 4) {
        return setPostalError("Invalid Postal");
      }
      setPostalError("");
    }
  };

  const handleSelectCountry = (e: any) => {
    const { value } = e.target;
    setCountryValue(value);
    const list = provinceLists?.filter(
      (list: any) => list.country_code === value?.country_code
    );
    setProvinceList(list);
  };

  const handleSelectProvince = (e: any) => {
    const { value } = e.target;
    setProvinceValue(value);
    const country = countriesLists?.find(
      (country: any) => country?.country_code === value.country_code
    );
    setCountryValue(country);
  };

  return (
    <div className="billing-address-home">
      <p className="billing-main-head">Billing Address</p>
      <div className="addressline">
        <p className="addressline-label">{addressLineLabel}</p>
        <input
          onChange={onChange}
          type="text"
          className="addressline-input"
          placeholder={addressLinePlaceholder}
        />
      </div>
      <div className="address-field">
        <div className="address-row">
          <div className="address-child country-parent">
            <p className="address-child-p">Country</p>

            <FormControl sx={{ width: 200, mt: 1 }}>
              <Select
                onChange={handleSelectCountry}
                MenuProps={MenuProps}
                value={countryValue}
                name="country"
              >
                <MenuItem disabled value="">
                  <em>Country</em>
                </MenuItem>
                {countryList?.map((list: any) => (
                  <MenuItem key={list?.id} value={list}>
                    {list?.country_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="address-child province-parent">
            <p className="address-child-p">Province / State</p>
            <FormControl sx={{ width: 200, mt: 1 }}>
              <Select
                MenuProps={MenuProps}
                onChange={handleSelectProvince}
                value={provinceValue}
                name="province"
              >
                <MenuItem disabled value="">
                  <em>Province / State</em>
                </MenuItem>
                {provinceList?.map((province: any) => (
                  <MenuItem key={province?.id || province} value={province}>
                    {province?.name || province}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="address-row">
          <div className="address-child city-parent">
            <p className="address-child-p">City</p>
            <input
              onChange={onChange}
              onBlur={cityFieldHandler}
              type="text"
              placeholder={cityPlaceholder}
              className={`address-child-input ${
                cityTextError.length ? "cityBoxError" : ""
              }`}
              name="city"
              id="city"
            />
            <br />
            {cityTextError && (
              <span className="textfield-error">{cityTextError}</span>
            )}
          </div>
          <div className="address-child city-parent">
            <p className="address-child-p">Postal</p>
            <input
              className={`address-child-input ${
                postalError.length ? "postalBoxError" : ""
              }`}
              onChange={onChange}
              onBlur={postalFieldHandler}
              type="text"
              name="postal"
              placeholder={postalcodePlaceholder}
            />
            <br />
            {postalError && (
              <span className="textfield-error">{postalError}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressBar;
