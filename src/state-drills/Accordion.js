import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    sections: [],
  };
  state = {
    currentSectionIndex: null,
  }

  handleClickSection = (id) => {
    this.setState(prevState => {
      // bonus feature checks if button clicked is already expanded, and if so, collapses
      return (prevState.currentSectionIndex === id ?
        {currentSectionIndex: null} :
        {currentSectionIndex : id}) 
    })
  }

  renderItem(section, id, currentSectionIndex) {
    return (
      <li key={id}>
        <button onClick={() => this.handleClickSection(id)}>
          {section.title}
        </button>
        {(currentSectionIndex === id) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const currentSectionIndex = this.state.currentSectionIndex;
    const sections = this.props.sections;
    //  v From solution v
    // const { activeSectionIndex } = this.state
    // const { sections } = this.props
    return (
      <ul>
        {sections.map((section, id) =>
          this.renderItem(section, id, currentSectionIndex)
        )}
      </ul>
    )
  }
}

export default Accordion;