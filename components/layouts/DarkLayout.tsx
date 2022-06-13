type DarkLayoutProps = {
  children: JSX.Element[] | JSX.Element;
}

const DarkLayout = ({ children }: DarkLayoutProps) => {

  return (
    <div style={{
        padding: "1rem",
        backgroundColor: "rgba(0, 0, 0, .3)",
        borderRadius: "5px"
      }}>
        { children }
    </div>
  )
}
export default DarkLayout