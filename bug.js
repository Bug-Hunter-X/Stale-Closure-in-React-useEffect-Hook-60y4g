```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []); // Empty dependency array means this runs only once on mount

  return <div>Count: {count}</div>;
}
```