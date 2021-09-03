
import React, { useState, useEffect } from 'react';
import {
  Divider,
} from '@material-ui/core';
import { useStyles } from './Styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

function SelectedCategory({
  allSelected,
  setAllSelected,
}) {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  // console.log(items);

  const getFullTitle = (artId) => {
    let fullTitle = [];
    while (true) {
      if (allSelected[artId]) {
        fullTitle = [allSelected[artId].title, ...fullTitle];
      } else {
        return fullTitle;
      }
      artId = allSelected[artId].parent;
    }
  }

  useEffect(() => {
    if (!allSelected) return;
    let dataItems = [];
    const artIds = Object.keys(allSelected);
    artIds.forEach(artId => {
      if (allSelected[artId].checked) {
        const fullTitle = getFullTitle(artId);
        const duplicateIndex = dataItems.findIndex(e => (fullTitle.join('')).includes(e[(Object.keys(e))[0]].join('')));
        if (duplicateIndex >= 0) return;
        dataItems = dataItems.filter(e => !((e[(Object.keys(e))[0]].join('')).includes(fullTitle.join(''))));
        dataItems = [...dataItems, {[artId]: fullTitle}]
      }
    });
    setItems(dataItems);
    // eslint-disable-next-line
  }, [allSelected]);

  return (
		<>
      <span className={classes.selectionTitle}>Selected categories</span>

      <Divider className={classes.divider} />

      <div className={classes.selectedCategoryContainer}>
        {items.map((item, i) =>
          <div className={classes.selectedCategoryItem} key={`div${i}`}>
            <ul key={i}>
              {item[(Object.keys(item))[0]].map((str, j) =>
                <li key={`${i}-${j}`}>{str}</li>
              )}
            </ul>
            <RemoveCircleIcon
              onClick={() => {
                setAllSelected(prev => ({
                  ...prev,
                  [(Object.keys(item))[0]]: {
                    ...prev[(Object.keys(item))[0]],
                    checked: false
                  }
                }));
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default SelectedCategory;