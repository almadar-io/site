/**
 * 
 * @module Forms
 * @desc This module contains the implementation of a form component with various input fields.
 * @requires React
 * @requires visibleWhenFilter
 * @requires styles
 * @requires withStyles
 * @requires withState
 * @requires compose
 * @requires theme
 * @requires moment
 * @requires Button
 * @requires Typography
 * @requires CircularProgress
 * @requires Inputs
 * @requires Autocomplete
 * @requires KeyboardTimePicker
 * @requires KeyboardDatePicker
 */
import React from "react";
import { visibleWhenFilter } from "./VisibleWhenFilter";
import { styles } from "./Forms.styles";
import { withStyles } from "@material-ui/styles";
import { withState, compose } from "recompose";
import theme from "theme";
import moment from "moment";
import { Button, Typography, CircularProgress } from "@material-ui/core";
import * as Inputs from "./Inputs";
import Autocomplete from "../Autocomplete/Autocomplete";
import {
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const enhance = compose(
  withState("timeoutValue", "setTimeoutValue", null),
  withState("currentGalleryIndex", "setCurrentGalleryIndex", 0)
);

const Fields = enhance(
  ({
    form,
    setFieldValue,
    errors,
    touched,
    handleBlur,
    setFieldTouched,
    values,
    media,
    onMediaDrop,
    onGalleryDrop,
    onMediaDelete,
    gallery,
    textEditorValue,
    setTextEditorValue,
    timeoutValue,
    setTimeoutValue,
    currentGalleryIndex,
    setCurrentGalleryIndex,
    isSubmitting,
    theme,
    classes,
    onRefGet,
    onSelect,
    onRefCreate,
    onRefUpdate,
    onRefFormGet,
    onRefMediaGet,
    onRefGalleryGet,
    onRefMediaDrop,
    onRefGalleryDrop,
    onRefDelete,
    ...rest
  }) => {
    if (form) {
      let fieldsView = form.fields.map((field, index) => {
        let falseDecisions = visibleWhenFilter(
          field,
          ["visibleWhen", "notVisibleWhen"],
          [true, false],
          values
        );
        if (falseDecisions.length > 0 || field.editable === false) {
          return;
        }
        return (
          <div key={field.name} style={{ margin: "1em" }}>
            {(field.type === "text" ||
              field.type === "number" ||
              field.type === "password" ||
              field.type === "email") && (
              <Inputs.TextFieldInput
                field={field}
                value={values[field.name]}
                type={field.type}
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
              />
            )}
            {field.type === "select" && (
              <Inputs.SelectInput
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                field={field}
                values={values}
                type={field.type}
              />
            )}
            {field.type === "checkbox" && (
              <Inputs.CheckboxInput
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                field={field}
                type={field.type}
                checked={values && values[field.name]}
              />
            )}
            {field.type === "markdown" && (
              <div>
                <Inputs.MarkdownInput
                  field={field}
                  setFieldValue={setFieldValue}
                  value={values[field.name]}
                  classes={classes}
                />
              </div>
            )}
            {field.type === "date" && (
              <div>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label={field.placeholder}
                  value={moment(values[field.name])}
                  onChange={date => {
                    setFieldValue(field.name, date);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </div>
            )}
            {field.type === "time" && (
              <div>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label={field.placeholder}
                  value={values[field.name]}
                  onChange={date => {
                    setFieldValue(field.name, date);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </div>
            )}
            {field.type === "datetime" && (
              <div>
                <Inputs.TextFieldInput
                  type="datetime-local"
                  value={moment(values[field.name]).format("YYYY-MM-DDThh:mm")}
                  field={field}
                  InputProps={{ shrink: true }}
                  setFieldTouched={setFieldTouched}
                  setFieldValue={setFieldValue}
                />
              </div>
            )}
            {field.type === "code-editor" && (
              <div>
                <Inputs.CodeInput
                  type={field.type}
                  value={values[field.name]}
                  field={field}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
              </div>
            )}
            {/* {field.type === "text-editor" && (
              <div>
                <Inputs.RichTextEditor
                  value={textEditorValue}
                  onChange={value => {
                    setTextEditorValue(value);
                    if (timeoutValue) {
                      clearTimeout(timeoutValue);
                    }
                    let timeout = setTimeout(() => {
                      setFieldValue(field.name, value.toString("html"));
                    }, 1000);
                    setTimeoutValue(timeout);
                  }}
                />
                {values[field.name]}
              </div>
            )} */}
            {field.type === "array" && (
              <Inputs.EditableArray
                field={field}
                setFieldValue={setFieldValue}
                classes={classes}
                form={form}
                values={values}
              />
            )}
            {field.type === "object-array" && (
              <Inputs.EditableObjectArray
                form={field.form}
                field={field}
                values={values[field.name]}
                setFieldValue={(key, value) => {
                  const el = values[field.name].find(
                    ({ _id }) => _id === value._id
                  );
                  const elIndex = values[field.name].indexOf(el);
                  setFieldValue(key, values[field.name]);
                }}
                setFieldTouched={setFieldTouched}
                onMediaDrop={onMediaDrop}
                onGalleryDrop={onGalleryDrop}
                onMediaDelete={onMediaDelete}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                classes={classes}
                onAdd={() => {
                  const passedValues = values[field.name]
                    ? values[field.name]
                    : [];
                  setFieldValue(field.name, [...passedValues, {}]);
                }}
                onDelete={index => {
                  const filtered = values[field.name].filter(
                    (v, i) => i !== index
                  );
                  setFieldValue(field.name, filtered);
                }}
                FieldsComponent={Fields}
                {...rest}
              />
            )}
            {field.type === "image" && (
              <Inputs.ImageFileInput
                onMediaDrop={onMediaDrop}
                media={media}
                field={field}
              />
            )}
            {field.type === "gallery" && (
              <Inputs.GalleryInput
                gallery={gallery}
                onMediaDelete={onMediaDelete}
                setCurrentGalleryIndex={setCurrentGalleryIndex}
                currentGalleryIndex={currentGalleryIndex}
                field={field}
                onGalleryDrop={onGalleryDrop}
              />
            )}
            {field.type === "ref" && (
              <Autocomplete
                placeholder={field.placeholder}
                onSelect={suggestion => {
                  const value = suggestion;
                  setFieldValue(field.name, value);
                  onSelect && onSelect(field.name, value);
                }}
                loadSuggestions={(text, updateSuggestions) => {
                  return onRefGet(field.name, text, updateSuggestions);
                }}
              />
            )}
            {field.type === "ref-array" &&
              (values[field.name].length && values[field.name].length > 0 ? (
                values[field.name].map(val => {
                  return <Fields form={form} values={val} />;
                })
              ) : (
                <>
                  <Fields
                    form={form}
                    values={{}}
                    setFieldValue={(key, value) => onRefUpdate(key, value)}
                    onRefMediaDrop={onMediaDrop}
                    onRefGalleryDrop={onGalleryDrop}
                    onRefMediaDelete={onMediaDelete}
                    refMedia={onRefMediaGet}
                    refGallery={onRefGalleryGet}
                    onRefFormGet={onRefFormGet}
                    onRefGet={onRefGet}
                    onRefCreate={onRefCreate}
                    onRefUpdate={onRefUpdate}
                    onRefDelete={onRefDelete}
                    {...rest}
                  />
                  <Button onClick={onRefCreate}>Add new Fields</Button>
                </>
              ))}
            {errors && errors[field.name] && touched[field.name] && (
              <Typography>{errors[field.name]}</Typography>
            )}
          </div>
        );
      });
      return (
        <>
          {fieldsView}
        </>
      );
    }
    return <CircularProgress />;
  }
);

export default withStyles(styles, { defaultTheme: theme })(Fields);
