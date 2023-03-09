const widgets = ref([])

const MAX = 4

export default () => {
  return {
    add(widget) {
      if (widgets.value.find(w => w.id === widget.id)) return

      if (widget.rank === -1) {
        widgets.value = [widget]
        return
      }

      const newArray = [...widgets.value, widget]
      const sorted = [...newArray].sort((a, b) => (a.rank < b.rank ? 1 : -1))
      const limited = sorted.filter((_, idx) => idx < MAX)
      widgets.value = limited
    },

    remove(widget) {
      const newArray = widgets.value.filter(w => w.id !== widget.id)
      widgets.value = null
      widgets.value = newArray
    },

    widgets,
  }
}
